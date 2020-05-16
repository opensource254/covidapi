require('../db/mongodb');
const NewsModel = require('../models/newsModel');

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
