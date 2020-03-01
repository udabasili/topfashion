const errorHandler = function(error, req, res, next){
    return res.status(error.status).json({
        status: error.status,
        message: error.message
    })
}

module.exports = errorHandler;