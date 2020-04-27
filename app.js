require('dotenv').config();
const express = require('express');
const routes = require('./api/v1/routes/routes');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
app.use('/', function (req, res) {
    return res.status(200).json({
        status: 200,
        Message: 'Welcome To covid API Kenya',
    });
});

module.exports = app;
