const Tip = require('../models/tipsModel');

const TipsController = {
    async create(req, res) {
        const { title, detail, thumbnail } = req.body;
        const tip = await Tip.create({ title, detail, thumbnail });
        tip.save()
            .then(function (currenttip) {
                return res.status(201).json({
                    status: 201,
                    data: [currenttip],
                });
            })
            .catch(function (err) {
                res.status(400).json({
                    status: 400,
                    err,
                });
            });
    },
    async getAll(req, res) {
        await Tip.findAll()
            .then(function (tips) {
                return res.status(200).json({
                    status: 200,
                    data: tips,
                });
            })
            .catch(function (err) {
                res.status(400).json({
                    status: 400,
                    err,
                });
            });
    },
};
module.exports = TipsController;
