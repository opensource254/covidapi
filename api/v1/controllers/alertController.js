const Alert = require('../models/alertModel');

const AlertsController = {
    async create(req, res) {
        const { title, detail, time } = req.body;
        try {
            const alert = await Alert.create({ title, time, detail });
            alert
                .save()
                .then(function (currentalert) {
                    return res.status(201).json({
                        data: currentalert,
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
        await Alert.findAll()
            .then(function (alerts) {
                return res.status(200).json({
                    status: 200,
                    data: alerts,
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
        await Alert.findOne({ where: { id: _id } })
            .then((alert) => {
                if (!alert) {
                    res.status(404).json('No Alert was found');
                } else {
                    console.log(`retrived tip ${JSON.stringify(alert, null, 2)}`);
                    res.status(200).json(alert);
                }
            })
            .catch((err) => {
                console.log(err);
                res.status(422).json({
                    message: 'There was an error processing your request, try again',
                });
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
                    res.status(404).json('No Alert found');
                }
                console.log(`updated alert ${JSON.stringify(_alert, null, 2)}`);
                Alert.update(values, { where: { id: _id }, returning: true, plain: true })
                    .then((updatedAlert) => {
                        console.log('Alert updated');
                        res.status(200).json(updatedAlert);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            });
        } catch (error) {
            console.log(error);
            res.status(422).json({
                error,
            });
        }
    },
    async deleteAlert(req, res) {
        const { id } = req.params;
        try {
            Alert.findOne({ where: { id } }).then((alert) => {
                if (!alert) {
                    res.status(404).json('No Alert was found');
                }
                Alert.destroy({ where: { id }, returning: true, plain: true })
                    .then((deletedAlert) => {
                        res.status(200).json(`Successfully deleted the Alert with the id  ${id}`);
                    })
                    .catch((err) => {
                        res.status(422).json('Could not delete the Alert');
                        console.log(err);
                    });
            });
        } catch (error) {
            res.status(500).json(error);
        }
    },
};
module.exports = AlertsController;
