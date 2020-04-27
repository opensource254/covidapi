const db = require('../db/db');
const Sequelize = require('../db/index');

const Tip = db.define('tips', {
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
});

Tip.sync()
    .then(() => console.log('Tips table created succesfully'))
    // eslint-disable-next-line no-unused-vars
    .catch((err) => console.log('Unable to create the user table'));

module.exports = Tip;