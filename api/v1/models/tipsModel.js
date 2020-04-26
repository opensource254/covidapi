const db = require('../db/db');
const Sequelize = require('../db/index');

const Tips = db.define('tips', {
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

Tips.sync()
    .then(() => console.log('Tips table created succesfully'))
    // eslint-disable-next-line no-unused-vars
    .catch((err) => console.log('Unable to create the user table'));

module.exports = Tips;
