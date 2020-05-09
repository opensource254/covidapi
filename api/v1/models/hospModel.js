const db = require('../db/db');
const Sequelize = require('../db/index');

const Hospital = db.define(
    'hospitals',
    {
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        lat: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        lon: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        open: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
    }
);

Hospital.sync({ alter: true })
    .then(() => console.log('Hospitals table created succesfully'))
    .catch((err) => console.log('Unable to create the hospitals table'));

module.exports = Hospital;
