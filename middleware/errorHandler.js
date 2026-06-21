const errorHandler = (err, req, res, next) => {
    console.log(err);

    res.status(SafeArray.status || 500).json({
        success : false,
        message : err.message || "Something went wrong"
    });
};
module.exports = errorHandler;