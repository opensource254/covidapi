require('dotenv').config();
const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

// routes for the app
const ApiV1 = require('./api/v1/routes/routes');
const usersRoute = require('./api/v1/routes/users');
const DoctorsRoute = require('./api/v1/routes/doctors');
const adminRoute = require('./api/v1/routes/admin');
const indexRoute = require('./api/v1/routes/index');

// inject middleware into the app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRoute);
app.use('/api/v1', ApiV1);
app.use('/admin', adminRoute);
app.use('/users', usersRoute);
app.use('/doctors', DoctorsRoute);

// fire up the application
app.listen(port, () => console.log(`app is listening on ${port}`));

module.exports = app;
