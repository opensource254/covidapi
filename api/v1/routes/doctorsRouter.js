const Router = require('express');

const doctorsRoute = Router();

// Define the routes here
doctorsRoute.get('/', (req, res) => {
    res.json('Doctors route is  Working 🚀');
});

module.exports = doctorsRoute;
