const Router = require('express');

const userRoute = Router();

userRoute.get('/', (req, res) => {
    res.json('Users route is  Working 🚀');
});

module.exports = userRoute;
