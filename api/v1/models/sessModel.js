const colors = require('colors');
const db = require('../db/db');
const Sequelize = require('../db/index');

const Sessions = db.define(
    'sesses',
    {
        sid: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        userId: {
            type: Sequelize.JSON,
        },
        expire: {
            type: Sequelize.DATE,
            allowNull: true,
        },
    },
    {
        freezeTableName: true,
    }
);

Sessions.sync({ force: true })
    .then(() => console.log(colors.green('Sessions table created succesfully')))
    .catch((err) => console.log(colors.red('Unable to create the sessions table', err)));

module.exports = Sessions;
