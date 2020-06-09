/* eslint-disable array-callback-return */
const axios = require('axios');
const NewsModel = require('../models/newsModel');

(async function saveTweets() {
    try {
        const rawTweets = await axios.get('https://twitter.covid19kenya.site/api/v2/moh_kenya');
        const allTweets = rawTweets.data;
        allTweets.map(async (tweet) => {
            const media = await tweet.tweet_media.map((obj) => {
                return obj.media_url_https;
            });
            return NewsModel.create({
                id: tweet.id,
                text: tweet.tweet,
                timestamp: tweet.relative_time,
                img_urls: media,
                username: tweet.user,
            });
        });
    } catch (error) {
        console.log(error);
    }
})();
