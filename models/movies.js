
const mongoose=require("mongoose")
const schema= new mongoose.Schema
const msg= "Field is required"

const moviesSchema = schema({
    title:{
        type: String,
        required:[true, msg]
    },
    image:{
        type: String,
        required:[true, msg]
    },
    description:{
        type: String,
        required:[true, msg]
    },
    genre:{
        type: String,
        required:[true, msg]
    },
    release_date:{
        type: Date,
        required:[true, msg]
    },
    trailer:{
        type: String,
        required:[true, msg]
    },
    rating:{
        type: String,
        required:[true, msg]
    },
    top_cast:{
        type: Array,
        required:[true, msg]
    },
    director:{
        type: Array,
        required:[true, msg]
    },
    production_studio:{
        type: Array,
        required:[true, msg]
    },
    seen_by:{
        type: String,
        required:[true, msg]
    },
    duration:{
        type: Number,
        required:[true, msg]
    },
    vendor_id:{
        type: String,
        required:[true, msg]
    },
})

const movies_model = mongoose.model("movies", moviesSchema)
module.exports = movies_model;

