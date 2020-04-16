const router = require('express').Router();

// Define the routes here
router.get('/', (req, res) => {
    res.json('Index route Working 🚀');
});

module.exports = router;
