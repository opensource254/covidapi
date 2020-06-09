const NewsModel = require('../models/newsModel');

const News = {
    async getTweets(req, res) {
        try {
            const news = await NewsModel.findAll({
                attributes: { exclude: ['createdAt', 'updatedAt'] },
            });
            res.status(200).json({
                news,
            });
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
};

module.exports = News;
