const authHandler = (req, res, next) => {
    const isLoggedIn = true;
    if (!isLoggedIn) {
        res.send("Please login first.");
    }
    next();
};

module.exports = authHandler;