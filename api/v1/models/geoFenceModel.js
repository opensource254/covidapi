const colors = require('colors');
const db = require('../db/db');
const Sequelize = require('../db/index');

const Geofence = db.define(
    'geofence',
    {
        position: {
            type: Sequelize.GEOMETRY('Point'),
        },
    },
    {
        freezeTableName: true,
    }
);

Geofence.sync({ alter: true })
    .then(() => console.log(colors.green('Geofence table created succesfully')))
    .catch((err) => console.log(colors.red('Unable to create the geofence table', err)));

module.exports = Geofence;
