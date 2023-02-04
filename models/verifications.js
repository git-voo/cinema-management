const mongoose = require("mongoose")
const schema = new mongoose.Schema
const msg = "Field is required"

const verificationsSchema = schema({
    date_created: {
        type: Array,
        required: [true, msg]
    },
    code: {
        type: String,
        required: [true, msg]
    },
    is_active: {
        type: String,
        required: [true, msg]
    },
    vendor_id: {
        type: String,
        required: [true, msg]
    }




    
})

const verifications_model = mongoose.model("verifications", verificationsSchema)
module.exports = verifications_model;