require('dotenv').config()
const express = require('express');
const app = express();
const ApiV1 = require('./api/v1/routes/routes')
const port = process.env.PORT || 5000;

// inject middleware into the app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', (req, res) => res.json({ message: 'covidapi is working!!!' }));
app.use('/api/v1', ApiV1)

// fire up the application
app.listen(port, () => console.log(`app is listening on ${port}`));

module.exports = app
