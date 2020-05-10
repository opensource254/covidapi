require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');
const routes = require('./api/v1/routes/routes');
const errHandler = require('./api/v1/middleware/errHandler');
require('./api/v1/db/mongodb');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
app.use(logger('dev'));
/*
*disabled for develement 
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
app.use(errHandler.errHandler);

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err,
            error: err,
        });
    });
}


module.exports = app;
