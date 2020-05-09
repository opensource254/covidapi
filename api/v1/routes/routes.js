const router = require('express').Router();
const TipsController = require('../controllers/tipsController');
const AlertsController = require('../controllers/alertController');
const NewsController = require('../controllers/newsController');
const HospController = require('../controllers/hospController');

// Fetch all news
router.get('/api/v1/tweets', NewsController.getTweets);

// Routes for all the tips here
router.post('/api/v1/tip', TipsController.create);
router.get('/api/v1/tips', TipsController.getAll);
router.put('/api/v1/tip/:id', TipsController.updateTip);
router.get('/api/v1/tip/:id', TipsController.getOne);
// Routes for the alerts
router.post('/api/v1/alert', AlertsController.create);
router.get('/api/v1/alerts', AlertsController.getAll);
router.put('/api/v1/alert/:id', AlertsController.updateAlert);
router.get('/api/v1/alert/:id', AlertsController.getOne);
// Routes for hospital
router.post('/api/v1/hospital', HospController.create);
router.get('/api/v1/hospitals', HospController.getAll);
router.get('/api/v1/hospital/:id', HospController.getOne);
router.put('/api/v1/hospital/:id', HospController.updateHosp);

module.exports = router;
