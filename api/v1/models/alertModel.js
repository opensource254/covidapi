const colors = require('colors');
const db = require('../db/db');
const Sequelize = require('../db/index');

const Alert = db.define(
    'alerts',
    {
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        detail: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
    }
);

Alert.sync({ alter: true })
    .then(() => console.log(colors.green('Alert table created succesfully')))
    .catch((err) => console.log(colors.red('Unable to create the alert table', err)));

module.exports = Alert;
