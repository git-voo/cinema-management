const mongoose = require("mongoose")
const schema = new mongoose.Schema
const msg = "Field is required"

const vendorsSchema = schema({
    name: {
        type: Array,
        required: [true, msg]
    },
    logo: {
        type: String,
        required: [true, msg]
    },
    
    
})

const vendors_model = mongoose.model("vendors", vendorsSchema)
module.exports = vendors_model;