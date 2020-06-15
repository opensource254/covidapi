const jwt = require('jsonwebtoken');
const User = require('../models/0-usersModel');
require('dotenv').config();

const secret = process.env.SECRET;

const Authmiddleware = {
    authenticate(req, res, next) {
        if (req.session.isLoggedin) {
            return next();
        }
        res.status(401).json({ message: 'You are not logged in' });
    },
    authorize(roles = []) {
        if (typeof roles === 'string') {
            roles = [roles];
        }
        return [
            async (req, res, next) => {
                const { token } = req.session;
                const decoded = jwt.verify(token, secret);
                const user = await User.findOne({ where: { id: decoded.id } });
                req.token = token;
                req.user = user;
                if (roles.length && !roles.includes(req.user.role)) {
                    return res
                        .status(401)
                        .json({ message: 'You are not authorized to make this request' });
                }
                next();
            },
        ];
    },
};

module.exports = Authmiddleware;
