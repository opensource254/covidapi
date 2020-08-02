const error = require('../helpers/globalError');

module.exports = {
    errHandler: (err, req, res, next) => {
        if (typeof err === 'string') {
            console.log(err);
            return res.status(422).json({ status: err.status, message: error });
        }
        if (err.name === 'UnauthorizedError') {
            console.log('Invalid Token');
            return res.status(401).json({ status: err.status, message: error });
        }

        console.log(err.message);
        return res.status(500).json({ status: err.status, message: error });
    },
};
