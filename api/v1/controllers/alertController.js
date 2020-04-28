const Alert = require('../models/alertModel');

const AlertsController = {
    async create(req, res) {
        const { title, time, detail } = req.body;
        try {
            const alert = await Alert.create({ title, time, detail });
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
};
module.exports = AlertsController;
