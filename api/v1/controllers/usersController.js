const User = require('../models/0-usersModel');
const { utilCreate } = require('../helpers/utilService');
const globalErr = require('../helpers/globalError');
require('dotenv').config();

const userMethods = {
    async signup(req, res) {
        try {
            const { firstname, lastname, email, password, location } = req.body;
            await utilCreate(req, res, User, {
                role: 'admin',
                firstname,
                lastname,
                email,
                password,
                location,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json(globalErr);
        }
    },
    async docsignup(req, res) {
        try {
            const { firstname, lastname, email, password, location } = req.body;
            await utilCreate(req, res, User, {
                role: 'doctor',
                firstname,
                lastname,
                email,
                password,
                location,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json(globalErr);
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
                globalErr,
            });
        }
    },
};

module.exports = userMethods;
