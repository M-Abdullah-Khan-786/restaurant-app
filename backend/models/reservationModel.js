const mongoose = require('mongoose');


const reservationSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    reservation_date: {
        type: String,
        required: true,
    },
    total_guests: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

//Export the model
const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation