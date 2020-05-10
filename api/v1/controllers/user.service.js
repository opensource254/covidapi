/* eslint-disable no-shadow */
require('dotenv').config();
const jwt = require('jsonwebtoken');

async function authenticate({ username, password }) {

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
