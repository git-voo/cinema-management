const mongoose = require("mongoose")
const schema = new mongoose.Schema
const msg = "Field is required"

const screensSchema = schema({
    status: {
        type: String,
        required: [true, msg]
    },
    theatre_id: {
        type: String,
        required: [true, msg]
    },
    cinema_id: {
        type: String,
        required: [true, msg]
    },
    vendorId: {
        type: String,
        required: [true, msg]
    }


})

const screens_model = mongoose.model("screens", screensSchema)
module.exports = screens_model;