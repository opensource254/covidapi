const Router = require('express');

const homeRouter = Router();

homeRouter.get('/', (req, res) => {
    res.json('Home route Working 🚀');
});

module.exports = homeRouter;
