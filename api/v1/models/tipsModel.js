const colors = require('colors');
const db = require('../db/db');
const Sequelize = require('../db/index');

const Tip = db.define(
    'tips',
    {
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        detail: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        thumbnail: {
            type: Sequelize.STRING,
        },
    },
    {
        freezeTableName: true,
    }
);

Tip.sync({ alter: true })
    .then(() => console.log(colors.green('Tips table created succesfully')))
    .catch((err) => console.log(colors.red('Unable to create the tips table', err)));

module.exports = Tip;
