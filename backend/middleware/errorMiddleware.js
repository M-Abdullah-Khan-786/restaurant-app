const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal server error"

    return res.status(statusCode).json({
        success: false,
        message
    })
}


const errorHandler = (statusCode, message) => {
    let err = new Error
    err.statusCode = statusCode
    err.message = message
    return err
}

module.exports = { errorMiddleware, errorHandler }