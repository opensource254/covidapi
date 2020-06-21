const Geofence = require('../models/geoFenceModel');
const {
    utilGetAll,
    utilCreate,
    utilGetOne,
    utilDelete,
    utilUpdate,
} = require('../helpers/utilService');

const GeofenceController = {
    async create(req, res) {
        const point = {
            type: 'Point',
            coordinates: [req.body.lat, req.body.lon],
        };
        try {
            await utilCreate(req, res, Geofence, { position: point });
        } catch (error) {
            res.status(422).json(error.message);
        }
    },
    async getAll(req, res) {
        await utilGetAll(req, res, Geofence);
    },
    async getOne(req, res) {
        const { id } = req.params;
        await utilGetOne(req, res, Geofence, id);
    },
    async update(req, res) {
        const { id } = req.params;
        const point = {
            type: 'Point',
            coordinates: [req.body.lat, req.body.lon],
        };
        try {
            await utilUpdate(req, res, Geofence, { name, position: point }, id);
        } catch (error) {
            res.status(422).json(error.message);
        }
    },
    async delete(req, res) {
        const { id } = req.params;
        await utilDelete(req, res, Geofence, id);
    },
};

module.exports = GeofenceController;
