const Tip = require('../models/tipsModel');

const TipsController = {
    async create(req, res) {
        const { title, detail, thumbnail } = req.body;
        try {
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
        } catch (error) {
            res.status(400).json({
                status: 400,
                error,
            });
        }
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
    async updateTip(req, res) {
        const { title, detail, thumbnail } = req.body;
        const _id = req.params.id;
        const values = { title, detail, thumbnail };
        try {
            Tip.findOne({ where: { id: _id } }).then((_tip) => {
                if (!_tip) {
                    console.log('No Tips found');
                }
                console.log(`retrived tip ${JSON.stringify(_tip, null, 2)}`);
                Tip.update(values, { where: { id: _id }, returning: true, plain: true })
                    .then((updatedTip) => {
                        res.json(updatedTip);
                        console.log(updatedTip);
                    })
                    .catch((err) => {
                        // next(err);
                        // res.json('Could not update the tip');
                        console.log(err);
                    });
            });
        } catch (error) {
            res.status(400).json({
                status: 400,
                error,
            });
        }
    },
};
module.exports = TipsController;
