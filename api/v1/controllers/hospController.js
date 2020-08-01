const Hospital = require('../models/hospModel');
const globalErr = require('../helpers/globalError');
const {
    utilGetAll,
    utilCreate,
    utilGetOne,
    utilUpdate,
    utilDelete,
} = require('../helpers/utilService');

const HospController = {
    async create(req, res) {
        const { title, lat, lon, description, open } = req.body;
        try {
            await utilCreate(req, res, Hospital, { title, lat, lon, description, open });
        } catch (error) {
            console.log(error);
            res.status(422).json(globalErr);
        }
    },
    async getAll(req, res) {
        await utilGetAll(req, res, Hospital);
    },
    async getOne(req, res) {
        const { id } = req.params;
        await utilGetOne(req, res, Hospital, id);
    },
    async updateHosp(req, res) {
        const { title, lat, lon, description, open } = req.body;
        const { id } = req.params;
        const values = { title, lat, lon, description, open };
        try {
            await utilUpdate(req, res, Hospital, values, id);
        } catch (error) {
            console.log(error);
            res.status(422).json(globalErr);
        }
    },
    async deleteHospital(req, res) {
        const { id } = req.params;
        try {
            await utilDelete(req, res, Hospital, id);
        } catch (error) {
            console.log(error);
            res.status(422).json(globalErr);
        }
    },
};
module.exports = HospController;
