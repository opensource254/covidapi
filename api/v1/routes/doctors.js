const router = require('express').Router();

// Define the routes here
router.get('/', (req, res) => {
    res.json('Doctors route is Working 🚀');
});

module.exports = router;
