require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');
const createError = require('http-errors');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./api/v1/routes/routes');
const errHandler = require('./api/v1/middleware/errHandler');
const db = require('./api/v1/db');
const database = require('./api/v1/db/db');
const Sequelize = require('./api/v1/db/index');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const Session = database.define('Session', {
    sid: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    userId: Sequelize.STRING,
    expires: Sequelize.DATE,
    data: Sequelize.STRING(50000),
});

const sessionStore = new SequelizeStore({
    db: database,
    table: 'Session',
    checkExpirationInterval: 15 * 60 * 1000,
    expiration: 36000,
});

app.use(logger('dev'));
app.use(cors());
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
        store: sessionStore,
        cookie: { maxAge: 60000 },
    })
);
app.use(routes);
app.use(errHandler.errHandler);
/* disabled for development
It interferes with err handling
app.use('/', function (req, res) {
    return res.status(200).json({
        status: 200,
        Message: 'Welcome To covid API Kenya',
    });
});
*/
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// Invalid status code error
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500).json({
            status: err.status,
            message: err.message,
        });
    });
}

sessionStore.sync();
Session.sync({ alter: true });
module.exports = app;
