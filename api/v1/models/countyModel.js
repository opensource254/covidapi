const colors = require('colors');
const db = require('../db/db');
const Sequelize = require('../db/index');

const County = db.define(
    'counties',
    {
        county_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter ther county id between 1 - 47',
                },
                max: 48,
                min: 1,
            },
        },
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
        position: {
            type: Sequelize.GEOMETRY('Point'),
        },
        /* lat: {
            type: Sequelize.INTEGER,
        },
        lon: {
            type: Sequelize.INTEGER,
        }, */
    },
    {
        freezeTableName: true,
    }
);

County.sync({ alter: true })
    .then(() => console.log(colors.green('county cases table created succesfully')))
    .catch((err) => console.log(colors.red('Unable to create the county cases table', err)));

module.exports = County;
