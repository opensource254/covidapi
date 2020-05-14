const jwt = require('jsonwebtoken');
const User = require('../models/0-usersModel');
require('dotenv').config();

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer', '').trim();

        const decoded = jwt.verify(token, process.env.SECRET);

        const user = await User.findOne({ where: { id: decoded.id } });

        if (!user) {
            throw new Error('User not found');
        }
        console.log(decoded);
        req.token = token;
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ err: 'Please authenticate!', ERROR: error.message });
    }
};

module.exports = auth;
