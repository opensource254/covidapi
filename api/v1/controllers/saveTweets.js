/* eslint-disable array-callback-return */
const axios = require('axios');
require('../db/mongodb');
const NewsModel = require('../models/newsModel');

(function saveTweets() {
    axios
        .get('http://localhost:1234/moh.json')
        .then((res) =>
            res.data.map((obj) => {
                const news = new NewsModel({
                    text: obj.text,
                    timestamp: new Date(obj.timestamp).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                    }),
                    username: obj.username,
                    screen_name: obj.screen_name,
                    img_urls: obj.img_urls,
                });
                news.save();
            })
        )
        .catch((err) => console.log(err));
})();
