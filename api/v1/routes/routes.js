const router = require('express').Router();
const Tipscontroller = require('../controllers/tipsController');

// Routes for all the tips here
router.post('/api/v1/tip', Tipscontroller.create);
router.get('/api/v1/tips', Tipscontroller.getAll);
module.exports = router;
