const router = require('express').Router();
const AuthMiddleware = require('../middleware/authMiddleware');
const Roles = require('../helpers/role');
const UsersController = require('../controllers/usersController');
const TipsController = require('../controllers/tipsController');
const AlertsController = require('../controllers/alertController');
const NewsController = require('../controllers/newsController');
const HospController = require('../controllers/hospController');
const countyController = require('../controllers/countiesController');

// Routes for authenticated  user
router.get('/api/v1/home', AuthMiddleware.authenticate, (req, res) => {
    res.send(req.session);
    console.log(req.session);
});

// Fetch all news
router.get('/api/v1/tweets', NewsController.getTweets);

// User routes
router.post('/api/v1/auth/signup/admin', UsersController.signup);
router.post('/api/v1/auth/signup/doctor', UsersController.docsignup);
router.post('/api/v1/auth/login', UsersController.login);
// logout a user and destroy the session
router.post('/api/v1/auth/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/api/v1/loggedout');
});
// api redirects to this after a successful logout
router.get('/api/v1/loggedout', (req, res) => {
    res.json({ Message: 'You have been logged out' });
});

// Routes for all the tips here
router.post(
    '/api/v1/tip',
    AuthMiddleware.authenticate,
    AuthMiddleware.authorize(Roles.Admin),
    TipsController.create
);
router.get('/api/v1/tips', TipsController.getAll);
router.get('/api/v1/tip/:id', TipsController.getOne);
router.put(
    '/api/v1/tip/:id',
    AuthMiddleware.authenticate,
    AuthMiddleware.authorize(Roles.Admin),
    TipsController.updateTip
);
router.delete(
    '/api/v1/tip/:id',
    AuthMiddleware.authenticate,
    AuthMiddleware.authorize(Roles.Admin),
    TipsController.deleteTip
);

// Routes for the alerts
router.post(
    '/api/v1/alert',
    AuthMiddleware.authenticate,
    AuthMiddleware.authorize(Roles.Admin),
    AlertsController.create
);
router.get('/api/v1/alerts', AlertsController.getAll);
router.get('/api/v1/alert/:id', AlertsController.getOne);
router.put(
    '/api/v1/alert/:id',
    AuthMiddleware.authenticate,
    AuthMiddleware.authorize(Roles.Admin),
    AlertsController.updateAlert
);
router.delete(
    '/api/v1/alert/:id',
    AuthMiddleware.authenticate,
    AuthMiddleware.authorize(Roles.Admin),
    AlertsController.deleteAlert
);

// Routes for hospital
router.post(
    '/api/v1/hospital',
    AuthMiddleware.authenticate,
    AuthMiddleware.authorize(Roles.Admin),
    HospController.create
);
router.get('/api/v1/hospitals', HospController.getAll);
router.get('/api/v1/hospital/:id', HospController.getOne);
router.put(
    '/api/v1/hospital/:id',
    AuthMiddleware.authenticate,
    AuthMiddleware.authorize(Roles.Admin),
    HospController.updateHosp
);
router.delete(
    '/api/v1/hospital/:id',
    AuthMiddleware.authenticate,
    AuthMiddleware.authorize(Roles.Admin),
    HospController.deleteHospital
);
// covid cases api
router.post(
    '/api/v1/county_case',
    AuthMiddleware.authenticate,
    AuthMiddleware.authorize(Roles.Admin),
    countyController.create
);
router.get('/api/v1/counties', countyController.getAll);
router.get('/api/v1/county/:id', countyController.getOne);
router.delete(
    '/api/v1/county/:id',
    AuthMiddleware.authenticate,
    AuthMiddleware.authorize(Roles.Admin),
    countyController.deleteCounty
);
module.exports = router;
