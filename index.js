const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 5000;

app.use('/', (req, res) => res.send({ message: 'covidapi is working!!!' }));

app.listen(port, () => console.log(`app is listening on ${port}`));
