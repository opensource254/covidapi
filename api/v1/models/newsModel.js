const colors = require('colors');
const db = require('../db/db');
const Sequelize = require('../db/index');

const News = db.define(
    'news',
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,
            primaryKey: true,
        },
        text: {
            type: Sequelize.STRING(1000),
            allowNull: false,
        },
        img_urls: {
            type: Sequelize.ARRAY(Sequelize.DataTypes.JSON),
            allowNull: false,
        },
        timestamp: {
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
            defaultValue: '@MOH_KENYA',
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
