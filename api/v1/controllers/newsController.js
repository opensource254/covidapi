/* eslint-disable no-sequences */
/* eslint-disable camelcase */
require('../db/mongodb');
const axios = require('axios');
const NewsModel = require('../models/newsModel');

class Tweets {
    constructor(text, timestamp, timestamp_relative, username, screen_name, img_urls) {
        this.text = text,
            this.timestamp = timestamp,
            this.timestamp_relative = timestamp_relative,
            this.username = username,
            this.screen_name = screen_name,
            this.img_urls = img_urls
    }
};

const News = {
    async getTweets(req, res) {
        const tweets = await axios.get('https://twitter.covid19kenya.site/api/v2/moh_kenya');
        const allTweets = tweets.data;
        try {
            // const news = await NewsModel.find({});
            const filtered_tweets = allTweets.map((obj) => {
                const sortedTweets = new Tweets({
                    text: obj.tweet,
                    timestamp: obj.created_at,
                    timestamp_relative: obj.relative_time,
                    username: obj.user,
                    screen_name: 'MOH_KENYA',
                    img_urls: obj.media,
                });
            });
            // console.log(typeof tweets);
            res.json({
                sortedTweets,
            });
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
};

module.exports = News;
