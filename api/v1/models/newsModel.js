const colors = require('colors');
const db = require('../db/db');
const Sequelize = require('../db/index');

const News = db.define(
    'news',
    {
        text: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        timestamp: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        timestamp_relative: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        screen_name: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 'MOH_KENYA',
        },
    },
    {
        freezeTableName: true,
    }
);

News.sync({ alter: true })
    .then(() => console.log(colors.green('News table created succesfully')))
    .catch((err) => console.log(colors.red('Unable to create the news table', err)));

module.exports = News;
