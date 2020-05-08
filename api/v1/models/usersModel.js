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
    },
    {
        freezeTableName: true,
    }
);

User.sync({ alter: true })
    .then(() => console.log('Users table created succesfully'))
    .catch((err) => console.log('Unable to create the users table', err));

module.exports = User;
