const mongoose = require("mongoose")
const schema = new mongoose.Schema
const msg = "Field is required"

const ratingsSchema = schema({
    date: {
        type: Array,
        required: [true, msg]
    },
    user_id: {
        type: String,
        required: [true, msg]
    },
    movie_id: {
        type: String,
        required: [true, msg]
    },
    rating: {
        type: Array,
        required: [true, msg]
    },
    vendorId: {
        type: String,
        required: [true, msg]
    }




    
})

const ratings_model = mongoose.model("ratings", ratingsSchema)
module.exports = ratings_model;