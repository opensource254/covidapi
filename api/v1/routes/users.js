const router = require('express').Router();

// Define the routes here
router.get('/', (req, res) => {
    res.json('Users route is  Working 🚀');
});

module.exports = router;
