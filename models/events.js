const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
    vendorId:{
        type: String,
        required:[true, 'field is required']
    },
    cinema_id:{
        type: String,
        required:[true, 'field is required']
    },
    date:{
        type: String,
        required:[true, 'field is required']
    }
})

const eventsModal = mongoose.modal("events", eventSchema)
module.exports = eventsModal