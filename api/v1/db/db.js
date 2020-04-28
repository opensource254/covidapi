const Sequelize = require('./index');
require('dotenv').config();

const db = new Sequelize({
    database: process.env.DB,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    dialect: 'postgres',
});
db.authenticate()
    .then(() => console.log('Database Connected'))
    .catch((err) => console.log(err));

module.exports = db;
