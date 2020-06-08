const Hospital = require('../models/hospModel');

const HospController = {
    async create(req, res) {
        const { title, lat, lon, description, open } = req.body;
        const hosp = await Hospital.create({ title, lat, lon, description, open });
        hosp.save()
            .then((hospital) => {
                return res.json({ status: 201, data: [hospital] });
            })
            .catch((err) => {
                console.log('Couldnt create a hospital');
                res.json(err);
            });
    },
    async getAll(req, res) {
        await Hospital.findAll()
            .then((hosp) => {
                if (!hosp) {
                    res.json('No hospitals found');
                }
                res.status(200).json({
                    status: 200,
                    data: hosp,
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
                    res.json(hosp);
                }
            })
            .catch((err) => {
                console.log(err);
                res.json('No hospital was found');
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
            console.log(`retrived tip ${JSON.stringify(_hosp, null, 2)}`);
            Hospital.update(values, { where: { id: _id }, returning: true, plain: true })
                .then((updatedHosp) => {
                    res.json(updatedHosp);
                })
                .catch((err) => {
                    // next(err);
                    res.json('Could not update the hospitals');
                    console.log(err);
                });
        });
    },
};
module.exports = HospController;
