const colors = require('colors');
const db = require('../db/db');
const Sequelize = require('../db/index');

const Tip = db.define(
    'counties',
    {
        county: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        cases: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        recoveries: {
            type: Sequelize.INTEGER,
        },
        tests: {
            type: Sequelize.INTEGER,
        },
        deaths: {
            type: Sequelize.INTEGER,
        },
        // position: {
        //    type: Sequelize.GEOMETRY('Point'),
        // },
        lat: {
            type: Sequelize.INTEGER,
        },
        lon: {
            type: Sequelize.INTEGER,
        },
    },
    {
        freezeTableName: true,
    }
);

Tip.sync({ force: true })
    .then(() => console.log(colors.green('county cases table created succesfully')))
    .catch((err) => console.log(colors.red('Unable to create the county cases table', err)));

module.exports = Tip;
