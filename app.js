require('dotenv').config();
const express = require('express');
const db = require('./api/v1/db/db');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes for the app
const ApiV1 = require('./api/v1/routes/routes');
const usersRoute = require('./api/v1/routes/usersRouter');
const DoctorsRoute = require('./api/v1/routes/doctorsRouter');
const adminRoute = require('./api/v1/routes/adminRouter');
const homeRouter = require('./api/v1/routes/homeRouter');

app.use('/', homeRouter);
app.use('/api/v1', ApiV1);
app.use('/admin', adminRoute);
app.use('/users', usersRoute);
app.use('/doctors', DoctorsRoute);

module.exports = app;
