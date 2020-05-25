
module.exports = {
    IsLoggedin: (req, res, next) => {
        if (req.session.isLoggedin===true) {
            return next();
        }
        res.json({ message: 'You are not logged in' });
    },
};
