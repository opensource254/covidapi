module.exports = {
    errHandler: (err, req, res, next) => {
        if (typeof err === 'string') {
            return res.status(422).json({ status: err.status, message: err });
        }
        if (err.name === 'UnauthorizedError') {
            return res.status(401).json({ status: err.status, message: 'Invalid Token' });
        }

        return res.status(500).json({ status: err.status, message: err.message });
    },
};
