const mongoose = require('mongoose');
require('dotenv').config();

const connection = mongoose
    .connect(
        `mongodb+srv://covidke:${encodeURIComponent(
            process.env.PASSWORD
        )}@covi19ke-tweet-data-mjecx.mongodb.net/test?retryWrites=true&w=majority` /* process.env.LOCALDB */,
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => {
        console.log('Mongodb connection is active');
    })
    .catch((err) => {
        console.log('failed to connect to Mongodb database', err);
    });

module.exports = connection;
