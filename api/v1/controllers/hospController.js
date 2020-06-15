const Hospital = require('../models/hospModel');

const HospController = {
    async create(req, res) {
        const { title, lat, lon, description, open } = req.body;
        const hosp = await Hospital.create({ title, lat, lon, description, open });
        hosp.save()
            .then((hospital) => {
                return res.status(201).json({ data: [hospital] });
            })
            .catch((err) => {
                console.log('Couldnt create a hospital');
                res.status(422).json(err);
            });
    },
    async getAll(req, res) {
        await Hospital.findAll()
            .then((hosp) => {
                if (!hosp) {
                    res.status(404).json('No hospitals found');
                }
                res.status(200).json({
                    data: hosp,
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
        await Hospital.findOne({
            where: {
                id: _id,
            },
        })
            .then((hosp) => {
                if (!hosp) {
                    res.status(404).json('No hospital was found');
                } else {
                    console.log(`retrived hospital ${JSON.stringify(hosp, null, 2)}`);
                    res.status(200).json(hosp);
                }
            })
            .catch((err) => {
                console.log(err);
                res.status(422).json(err.message);
            });
    },
    async updateHosp(req, res) {
        const { title, lat, lon, description, open } = req.body;
        const _id = req.params.id;
        const values = { title, lat, lon, description, open };
        Hospital.findOne({ where: { id: _id } }).then((_hosp) => {
            if (!_hosp) {
                console.log('No hospitals found');
            }
            console.log(`retrived hospital ${JSON.stringify(_hosp, null, 2)}`);
            Hospital.update(values, { where: { id: _id }, returning: true, plain: true })
                .then((updatedHosp) => {
                    res.status(200).json(updatedHosp);
                })
                .catch((err) => {
                    res.status(422).json('Could not update the hospitals');
                    console.log(err);
                });
        });
    },
    async deleteHospital(req, res) {
        const { id } = req.params;
        try {
            Hospital.findOne({ where: { id } }).then((hospital) => {
                if (!hospital) {
                    res.status(404).json('No hospital was found');
                }
                Hospital.destroy({ where: { id }, returning: true, plain: true })
                    .then((deletedhospital) => {
                        res.status(200).json(
                            `Successfully deleted the hospital with the id  ${id}`
                        );
                    })
                    .catch((err) => {
                        res.status(422).json('Could not delete the hospital');
                        console.log(err);
                    });
            });
        } catch (error) {
            res.status(500).json(error);
        }
    },
};
module.exports = HospController;
