const Reservation = require("../models/reservationModel");
const asyncHandler = require('express-async-handler')
const { errorHandler } = require("../middleware/errorMiddleware");

exports.createReservation = asyncHandler(async (req, res, next) => {
    const { first_name, last_name, email, phone, reservation_date, total_guests, description } = req.body

    if (!first_name || !last_name || !email || !phone || !reservation_date || !total_guests || !description) {
        return next(errorHandler(400, "Please fill all the fields"))
    }
    const reserved = await Reservation.create({ first_name, last_name, email, phone, reservation_date, total_guests, description })
    return res.status(200).json({
        status: true,
        message: `${first_name} ${last_name} Your reservation has been successfully completed`,
        reserved
    })
})