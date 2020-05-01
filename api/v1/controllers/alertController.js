const Alert = require('../models/alertModel');

const AlertsController = {
    async create(req, res) {
        const { title, detail } = req.body;
        try {
            const alert = await Alert.create({ title, detail });
            alert
                .save()
                .then(function (currentalert) {
                    return res.status(201).json({
                        status: 201,
                        data: [currentalert],
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
        await Alert.findAll()
            .then(function (alerts) {
                return res.status(200).json({
                    status: 200,
                    data: alerts,
                });
            })
            .catch(function (err) {
                res.status(400).json({
                    status: 400,
                    err,
                });
            });
    },
    async getOne(req, res) {
        const _id = req.params.id;
        await Alert.findOne({ where: { id: _id } })
            .then((alert) => {
                if (!alert) {
                    res.json('No Alert was found');
                } else {
                    console.log(`retrived tip ${JSON.stringify(alert, null, 2)}`);
                    res.json(alert);
                }
            })
            .catch((err) => {
                console.log(err);
                res.json('No Alert was found');
            });
    },
    async updateAlert(req, res) {
        const { title, detail } = req.body;
        const _id = req.params.id;
        const values = { title, detail };
        try {
            Alert.findOne({ where: { id: _id } }).then((_alert) => {
                if (!_alert) {
                    console.log('no Alert found');
                    res.json('No Alert found');
                }
                console.log(`retrieved alert ${JSON.stringify(_alert, null, 2)}`);
                Alert.update(values, { where: { id: _id }, returning: true, plain: true })
                    // .then(Alert.findByPk(_id))
                    .then((updatedAlert) => {
                        console.log('Alert updated');
                        res.json(updatedAlert);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            });
        } catch (error) {
            console.log(error);
            res.status(400).json({
                status: 400,
                error,
            });
        }
    },
};
module.exports = AlertsController;
