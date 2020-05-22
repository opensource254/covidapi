const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const colors = require('colors');
const db = require('../db/db');
const Sequelize = require('../db/index');

const User = db.define(
    'users',
    {
        firstname: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        lastname: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        location: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        token: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        role: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 'user',
        },
    },
    {
        hooks: {
            async beforeCreate(user) {
                const salt = await bcrypt.genSaltSync();
                // eslint-disable-next-line no-param-reassign
                user.password = await bcrypt.hashSync(user.password, salt);
            },
        },
    },
    {
        freezeTableName: true,
    }
);
User.checkCredentials = async function (email, password) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
        throw new Error('The user with that email does not exist, signup first');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Wrong email/password combination');
    }
    return user;
};
User.generateToken = async function (email) {
    const user = await User.findOne({ where: { email } });
    // console.log(user);
    const tokenField = user.token;
    const gentoken = jwt.sign({ id: user.id.toString(), role: user.role }, process.env.SECRET);
    user.update(gentoken, { where: { token: tokenField } });
    return gentoken;
};

User.sync({ alter: true })
    .then(() => console.log(colors.green('Users table created succesfully')))
    .catch((err) => console.log(colors.red('Unable to create the users table', err)));

module.exports = User;
