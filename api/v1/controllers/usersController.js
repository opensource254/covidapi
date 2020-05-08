const Role = require('../helpers/role');
const userService = require('./user.service');
const User = require('../models/0-usersModel');

const userMethods = {
    async signup(req, res) {
        try {
            const { firstname, lastname, email, password, location } = req.body;
            const user = await User.create({ firstname, lastname, email, password, location });
            user.save()
                .then((userparam) => {
                    return res.json({ status: 201, data: userparam });
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
};

module.exports = userMethods;
