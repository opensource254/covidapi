/* eslint-disable array-callback-return */
const axios = require('axios');
const NewsModel = require('../models/newsModel');

(async function saveTweets() {
    try {
        const rawTweets = await axios.get('https://twitter.covid19kenya.site/api/v2/moh_kenya');
        const allTweets = rawTweets.data;
        allTweets.map((tweet) => {
            return NewsModel.create({
                id: tweet.id,
                text: tweet.tweet,
                timestamp: tweet.created_at,
                timestamp_relative: tweet.relative_time,
                img_urls: tweet.tweet_media,
                username: tweet.user,
            });
        });
    } catch (error) {
        console.log(error);
    }
})();
