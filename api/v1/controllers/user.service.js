/* eslint-disable no-shadow */
require('dotenv').config();
const jwt = require('jsonwebtoken');
const Role = require('../helpers/role');

// users hardcoded for simplicity, store in a db for production applications
const users = [
    {
        id: 1,
        username: 'admin',
        password: 'admin',
        firstName: 'Admin',
        lastName: 'User',
        role: Role.Admin,
    },
    {
        id: 2,
        username: 'user',
        password: 'user',
        firstName: 'Normal',
        lastName: 'User',
        role: Role.User,
    },
];

async function authenticate({ username, password }) {
    const user = await users.find((u) => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ sub: user.id, role: user.role }, process.env.SECRET);
        const { password, ...userWithoutPassword } = user;
        return {
            ...userWithoutPassword,
            token,
        };
    }
}

async function getAll() {
    return users.map((u) => {
        const { password, ...userWithoutPassword } = u;
        return userWithoutPassword;
    });
}

async function getById(id) {
    const user = users.find((u) => u.id === parseInt(id, 10));
    if (!user) return;
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}

module.exports = {
    authenticate,
    getAll,
    getById,
};
