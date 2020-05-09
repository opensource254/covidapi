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
    .then(() => console.log('Alert table created succesfully'))
    // eslint-disable-next-line no-unused-vars
    .catch((err) => console.log('Unable to create the alert table'));

module.exports = Alert;
