const mongoose = require("mongoose")

const seatSchema = new mongoose.Schema({
    seat_no:{
        type: String,
        required:[true, 'field is required']
    },
    theater_id:{
        type: String,
        required:[true, 'field is required']
    },
    category_id:{
        type: String,
        required:[true, 'field is required']
    },
    is_booked:{
        type: String,
        required:[true, 'field is required']
    },
    cinema_id:{
        type: String,
        required:[true, 'field is required']
    },
    vendorId:{
        type: String,
        required:[true, 'field is required']
    }
})


const seatsModal = mongoose.modal("seats", seatSchema)
module.exports = seatsModal
