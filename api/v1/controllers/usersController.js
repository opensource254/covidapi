/* eslint-disable no-shadow */
const jwt = require('jsonwebtoken');
const Role = require('../helpers/role');
const userService = require('./user.service');
const User = require('../models/0-usersModel');
require('dotenv').config();

const userMethods = {
    async signup(req, res) {
        try {
            const { firstname, lastname, email, password, location } = req.body;
            // const token = await User.generateToken(req.body.email);
            const user = await User.create({ firstname, lastname, email, password, location });
            user.save()
                .then((userparam) => {
                    return res.status(201).json({ userparam });
                })
                .catch((err) => {
                    console.log('Couldnt create a user');
                    res.json(err);
                });
        } catch (error) {
            console.error(error);
            res.json(error);
        }
    },
    async login(req, res) {
        try {
            const user = await User.checkCredentials(req.body.email, req.body.password);
            const token = await User.generateToken(req.body.email); // jwt.sign({ id: User.id, role: User.role }, process.env.SECRET);
            if (user) {
                return res.status(200).json({
                    status: 200,
                    user,
                    token,
                });
            }
        } catch (error) {
            console.error(error);
            res.status(400).json({
                error: error.message,
            });
        }
    },
};

module.exports = userMethods;
