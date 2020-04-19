const Router = require('express');

const adminRoute = Router();

// Define the routes here
adminRoute.get('/', (req, res) => {
    res.json('Admin route is  Working 🚀');
});

module.exports = adminRoute;
