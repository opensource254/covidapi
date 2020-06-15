const County = require('../models/countyModel');
const { Sequelize } = require('../db');

const countyController = {
    async create(req, res) {
        const { county_id, county, cases, recoveries, tests, deaths } = req.body;
        // this involves use of postGIS it will be revisited soon
        const point = {
            type: 'Point',
            coordinates: [req.body.lat, req.body.lon],
        };

        const con = await County.create({
            county_id,
            county,
            cases,
            recoveries,
            tests,
            deaths,
            position: point,
        });
        con.save()
            .then((_county) => {
                return res.status(201).json({ data: [_county] });
            })
            .catch(Sequelize.ValidationError, (err) => {
                console.log('Couldnt create a county case');
                res.status(422).json(err);
            });
    },
    async getAll(req, res) {
        await County.findAll()
            .then((county) => {
                if (!county) {
                    res.status(404).json('No conty cases found');
                }
                res.status(200).json({
                    data: county,
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
        await County.findOne({
            where: {
                id: _id,
            },
        })
            .then((con) => {
                if (!con) {
                    res.status(404).json('No county cases was found');
                } else {
                    console.log(`retrived county case ${JSON.stringify(con, null, 2)}`);
                    res.status(200).json(con);
                }
            })
            .catch((err) => {
                console.log(err);
                res.status(422).json('No coounty cases was found');
            });
    },
    async deleteCounty(req, res) {
        const { id } = req.params;
        try {
            County.findOne({ where: { id } }).then((county) => {
                if (!county) {
                    res.status(404).json('No County was found');
                }
                County.destroy({ where: { id }, returning: true, plain: true })
                    .then((deletedCounty) => {
                        res.status(200).json(`Successfully deleted the County with the id  ${id}`);
                    })
                    .catch((err) => {
                        res.status(422).json('Could not delete the County');
                        console.log(err);
                    });
            });
        } catch (error) {
            res.status(500).json(error);
        }
    },
};

module.exports = countyController;
