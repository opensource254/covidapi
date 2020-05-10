require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Helper = {
    hashPassword(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    },

    comparePassword(password, hashedPassword) {
        return bcrypt.compareSync(password, hashedPassword);
    },
    generateToken(id) {
        const token = jwt.sign(
            {
                userId: id,
            },
            process.env.SECRET,
            { expiresIn: '1d' }
        );
        return token;
    },
};

module.exports = Helper;
