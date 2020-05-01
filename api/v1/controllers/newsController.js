const axios = require('axios');
require('../db/mongodb');
const NewsModel = require('../models/newsModel');

function saveTweets() {
    axios
        .get('http://localhost:1234/small.json')
        .then((res) =>
            res.data.map((obj) => {
                const news = new NewsModel({
                    text: obj.text,
                    timestamp: new Date(obj.timestamp).toLocaleDateString('en-KE', {
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
}

const News = {
    async getTweets(req, res) {
        try {
            const news = await NewsModel.find({});
            res.json({
                tweets: news,
            });
        } catch (error) {
            res.status(500).send();
        }
    },
};

// saveTweets();

module.exports = News;
