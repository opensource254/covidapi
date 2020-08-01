const Tip = require('../models/tipsModel');
const globalErr = require('../helpers/globalError');
const {
    utilGetAll,
    utilCreate,
    utilGetOne,
    utilUpdate,
    utilDelete,
} = require('../helpers/utilService');

const TipsController = {
    async create(req, res) {
        const { title, detail, thumbnail } = req.body;
        try {
            await utilCreate(req, res, Tip, { title, detail, thumbnail });
        } catch (error) {
            console.log(error);
            res.status(422).json({
                globalErr,
            });
        }
    },
    async getAll(req, res) {
        await utilGetAll(req, res, Tip);
    },
    async getOne(req, res) {
        const { id } = req.params;
        await utilGetOne(req, res, Tip, id);
    },
    async updateTip(req, res) {
        const { title, detail, thumbnail } = req.body;
        const { id } = req.params;
        const values = { title, detail, thumbnail };
        try {
            utilUpdate(req, res, Tip, values, id);
        } catch (error) {
            res.status(422).json({
                globalErr,
            });
        }
    },
    async deleteTip(req, res) {
        const { id } = req.params;
        try {
            utilDelete(req, res, Tip, id);
        } catch (error) {
            console.log(error);
            res.status(422).json(globalErr);
        }
    },
};
module.exports = TipsController;
