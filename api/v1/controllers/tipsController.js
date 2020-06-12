const Tip = require('../models/tipsModel');

const TipsController = {
    async create(req, res) {
        const { title, detail, thumbnail } = req.body;
        try {
            const tip = await Tip.create({ title, detail, thumbnail });
            tip.save()
                .then(function (currenttip) {
                    return res.status(201).json({
                        data: [currenttip],
                    });
                })
                .catch(function (err) {
                    res.status(422).json({
                        err,
                    });
                });
        } catch (error) {
            res.status(422).json({
                error,
            });
        }
    },
    async getAll(req, res) {
        await Tip.findAll()
            .then(function (tips) {
                if (!tips) {
                    res.status(404).json('No tips found');
                }
                return res.status(200).json({
                    data: tips,
                });
            })
            .catch(function (err) {
                res.status(422).json({
                    err,
                });
            });
    },
    async getOne(req, res) {
        const _id = req.params.id;
        await Tip.findOne({ where: { id: _id } })
            .then((tip) => {
                if (!tip) {
                    res.status(404).json('No tip found');
                }
                console.log(`retrived tip ${JSON.stringify(tip, null, 2)}`);
                res.status(200).json(tip);
            })
            .catch((err) => console.log(err));
    },
    async updateTip(req, res) {
        const { title, detail, thumbnail } = req.body;
        const _id = req.params.id;
        const values = { title, detail, thumbnail };
        try {
            Tip.findOne({ where: { id: _id } }).then((_tip) => {
                if (!_tip) {
                    console.log('No Tips found');
                    res.status(404).json('No Tips found');
                }
                console.log(`retrived tip ${JSON.stringify(_tip, null, 2)}`);
                Tip.update(values, { where: { id: _id }, returning: true, plain: true })
                    .then((updatedTip) => {
                        res.status(200).json(updatedTip);
                    })
                    .catch((err) => {
                        res.status(422).json('Could not update the tip');
                        console.log(err);
                    });
            });
        } catch (error) {
            res.status(422).json({
                error,
            });
        }
    },
};
module.exports = TipsController;
