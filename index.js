require('dotenv').config()
const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
 * Api Version one
 */
const ApiV1 = require('./api/v1/routes/routes')

const port = process.env.PORT || 5000;

app.use('/', (req, res) => res.send({ message: 'covidapi is working!!!' }));
// Inject API V1
app.use('/api/v1', ApiV1)

app.listen(port, () => console.log(`app is listening on ${port}`));

module.exports = app
