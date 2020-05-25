module.exports = {
    IsLoggedin: (req, res, next) => {
        if (req.session.isLoggedin) {
            return next();
        }
        res.status(401).json({ message: 'You are not logged in' });
    },
};
