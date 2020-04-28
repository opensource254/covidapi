const axios = require('axios');
require('../db/mongodb');
const NewsModel = require('../models/newsModel');

function saveTweets() {
    axios
        .get('http://0.0.0.0:8000/small.json')
        .then((res) =>
            res.data.map((obj) => {
                const news = new NewsModel({
                    text: obj.text,
                    timestamp: new Date(obj.timestamp),
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

module.exports = News;
