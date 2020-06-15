const User = require('../models/0-usersModel');
require('dotenv').config();

const userMethods = {
    async signup(req, res) {
        try {
            const { firstname, lastname, email, password, location } = req.body;
            const user = await User.create({
                role: 'admin',
                firstname,
                lastname,
                email,
                password,
                location,
            });
            user.save()
                .then((userparam) => {
                    return res.status(201).json({ userparam });
                })
                .catch((err) => {
                    console.log('Couldnt create a user');
                    res.status(422).json(err);
                });
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    },
    async docsignup(req, res) {
        try {
            const { firstname, lastname, email, password, location } = req.body;
            const user = await User.create({
                role: 'doctor',
                firstname,
                lastname,
                email,
                password,
                location,
            });
            user.save()
                .then((userparam) => {
                    return res.status(201).json({ userparam });
                })
                .catch((err) => {
                    console.log('Couldnt create a doctor');
                    res.status(422).json(err);
                });
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    },
    async login(req, res, next) {
        try {
            const user = await User.checkCredentials(req.body.email, req.body.password);
            const token = await User.generateToken(req.body.email);
            if (user) {
                req.session.user = user.dataValues;
                req.session.isLoggedin = true;
                req.session.token = token;
                console.log(req.session);
                return res.status(200).json({
                    user,
                    token,
                });
            }
        } catch (error) {
            console.error(error);
            res.status(422).json({
                error: error.message,
            });
        }
    },
};

module.exports = userMethods;
