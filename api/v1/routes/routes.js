const router = require('express').Router();
const AuthMiddleware = require('../middleware/authMiddleware');
const authorize = require('../helpers/authorize');
const Roles = require('../helpers/role');
const UsersController = require('../controllers/usersController');
const TipsController = require('../controllers/tipsController');
const AlertsController = require('../controllers/alertController');
const NewsController = require('../controllers/newsController');
const HospController = require('../controllers/hospController');

// Fetch all news
router.get('/api/v1/tweets', NewsController.getTweets);

// User routes
router.post('/api/v1/auth/signup/user', UsersController.signup);
router.post('/api/v1/auth/login', UsersController.login);

// Routes for all the tips here
// NB: test this on postman to see the 'user not found error'
router.post(
    '/api/v1/tip',
    AuthMiddleware,
    // authorize(Roles.Admin, Roles.Doctor),
    TipsController.create
);
router.get('/api/v1/tips', TipsController.getAll);
router.put('/api/v1/tip/:id', TipsController.updateTip);
router.get('/api/v1/tip/:id', TipsController.getOne);

// Routes for the alerts
router.post('/api/v1/alert', authorize(Roles.User), AlertsController.create);
router.get('/api/v1/alerts', AlertsController.getAll);
router.put('/api/v1/alert/:id', /* authorize(Roles.Admin), */ AlertsController.updateAlert);
router.get('/api/v1/alert/:id', AlertsController.getOne);

// Routes for hospital
router.post('/api/v1/hospital', /* authorize(Roles.Admin, Roles.Doctor), */ HospController.create);
router.get('/api/v1/hospitals', HospController.getAll);
router.get('/api/v1/hospital/:id', HospController.getOne);
router.put(
    '/api/v1/hospital/:id',
    /* authorize(Roles.Admin, Roles.Doctor), */ HospController.updateHosp
);

module.exports = router;
