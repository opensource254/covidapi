const User = require('../models/0-usersModel');

module.exports = {
    IsAuth: (err, req, res, next) => {
        User.findOne({ where: { id: req.session.userId } }).then((error, user) => {
            
        });
    },
};
