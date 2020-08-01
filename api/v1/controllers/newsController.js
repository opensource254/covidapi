const NewsModel = require('../models/newsModel');
const globalErr = require('../helpers/globalError');

const News = {
    async getTweets(req, res) {
        try {
            const news = await NewsModel.findAll({
                attributes: { exclude: ['createdAt', 'updatedAt'] },
            });
            res.status(200).json({
                tweets: news,
            });
        } catch (error) {
            console.log(error);
            res.status(500).send(globalErr);
        }
    },
};

module.exports = News;
