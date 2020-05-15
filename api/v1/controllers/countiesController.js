const County = require('../models/countyModel');

const countyController = {
    async create(req, res) {
        /* this involves use of postGIS it will be revisited soon
        const point = {
            type: point,
            coordinates: [req.body.lat, req.body.lon],
        };
        */
        const { county, cases, recoveries, tests, deaths, lat, lon } = req.body;
        const con = await County.create({
            county,
            cases,
            recoveries,
            tests,
            deaths,
            lat,
            lon,
            // geometry: point,
        });
        con.save()
            .then((_county) => {
                return res.json({ status: 201, data: [_county] });
            })
            .catch((err) => {
                console.log('Couldnt create a county case');
                res.json(err);
            });
    },
    async getAll(req, res) {
        await County.findAll()
            .then((county) => {
                if (!county) {
                    res.json('No hospitals found');
                }
                res.status(200).json({
                    status: 200,
                    data: county,
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
        await County.findOne({
            where: {
                id: _id,
            },
        })
            .then((con) => {
                if (!con) {
                    res.json('No hospital was found');
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
