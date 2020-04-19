require('dotenv').config();
const express = require('express');

const app = express();

// routes for the app
const ApiV1 = require('./api/v1/routes/routes');
const usersRoute = require('./api/v1/routes/usersRouter');
const DoctorsRoute = require('./api/v1/routes/doctorsRouter');
const adminRoute = require('./api/v1/routes/adminRouter');
const homeRouter = require('./api/v1/routes/homeRouter');

// inject middleware into the app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', homeRouter);
app.use('/api/v1', ApiV1);
app.use('/admin', adminRoute);
app.use('/users', usersRoute);
app.use('/doctors', DoctorsRoute);

module.exports = app;
