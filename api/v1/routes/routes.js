const router = require('express').Router();
const TipsController = require('../controllers/tipsController');
const AlertsController = require('../controllers/alertController');
const NewsController = require('../controllers/newsController');

// Fetch all news
router.get('/api/v1/tweets', NewsController.getTweets);

// Routes for all the tips here
router.post('/api/v1/tip', TipsController.create);
router.get('/api/v1/tips', TipsController.getAll);
router.put('/api/v1/tip/:id', TipsController.updateTip);
// Routes for the alerts
router.post('/api/v1/alert', AlertsController.create);
router.get('/api/v1/alerts', AlertsController.getAll);
router.put('/api/v1/alert/:id', AlertsController.updateAlert);

module.exports = router;
