const County = require('../models/countyModel');
const { Sequelize } = require('../db');

const countyController = {
    async create(req, res) {
        // eslint-disable-next-line camelcase
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
            // lat,
            // lon,
            position: point,
        });
        con.save()
            .then((_county) => {
                return res.json({ status: 201, data: [_county] });
            })
            .catch(Sequelize.ValidationError, (err) => {
                console.log('Couldnt create a county case');
                res.json(err);
            });
    },
    async getAll(req, res) {
        await County.findAll()
            .then((county) => {
                if (!county) {
                    res.json('No conty cases found');
                }
                res.status(200).json({
                    status: 200,
                    data: county,
                });
            })
            .catch(function (err) {
                res.status(422).json({
                    status: 422,
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
                    res.json('No county cases was found');
                } else {
                    console.log(`retrived county case ${JSON.stringify(con, null, 2)}`);
                    res.json(con);
                }
            })
            .catch((err) => {
                console.log(err);
                res.json('No coounty cases was found');
            });
    },
};

module.exports = countyController;
