require('dotenv').config();
const express = require('express');
const routes = require('./api/v1/routes/routes');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

module.exports = app;
