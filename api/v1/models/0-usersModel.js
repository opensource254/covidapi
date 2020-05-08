const bcrypt = require('bcrypt');
const colors = require('colors');
const db = require('../db/db');
const Sequelize = require('../db/index');

const User = db.define(
    'users',
    {
        firstname: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        lastname: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        location: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        role: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 'user',
        },
    },
    {
        hooks: {
            async beforeCreate(user) {
                const salt = await bcrypt.genSaltSync();
                user.password = await bcrypt.hashSync(user.password, salt);
            },
        },
        // instanceMethods: {
        //     async validPassword(password) {
        //         return bcrypt.compareSync(password, this.password);
        //     },
        // },
    },
    {
        freezeTableName: true,
    }
);

User.sync({ alter: true })
    .then(() => console.log(colors.green('Users table created succesfully')))
    .catch((err) => console.log(colors.red('Unable to create the users table', err)));

module.exports = User;
