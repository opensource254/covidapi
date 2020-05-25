const router = require('express').Router();
const AuthMiddleware = require('../middleware/authMiddleware');
const authorize = require('../helpers/authorize');
const Roles = require('../helpers/role');
const UsersController = require('../controllers/usersController');
const TipsController = require('../controllers/tipsController');
const AlertsController = require('../controllers/alertController');
const NewsController = require('../controllers/newsController');
const HospController = require('../controllers/hospController');
const countyController = require('../controllers/countiesController');
const { IsLoggedin } = require('../middleware/isauth');

// Routes for authenticated  user
router.get('/api/v1/home', IsLoggedin, (req, res) => {
    /* if (req.session.userId) {
        res.send(req.session);
        console.log('we are logged in');
    } else {
        console.log('backup');
    } */
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
    IsLoggedin,
    AuthMiddleware,
    authorize(Roles.Admin),
    TipsController.create
);
router.get('/api/v1/tips', TipsController.getAll);
router.put('/api/v1/tip/:id', TipsController.updateTip);
router.get('/api/v1/tip/:id', TipsController.getOne);

// Routes for the alerts
router.post('/api/v1/alert', /* authorize(Roles.User), */ AlertsController.create);
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
// covid cases api
router.post('/api/v1/county_case', /* authorize(Roles.User), */ countyController.create);
router.get('/api/v1/counties', countyController.getAll);
router.get('/api/v1/county/:id', countyController.getOne);
module.exports = router;
