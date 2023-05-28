
const mongoose=require("mongoose")
const schema= mongoose.Schema
const msg= "Field is required"

const moviesSchema = new schema({
    title:{
        type: String,
        required:[true, msg]
    },
    thumbnail:{
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
    releaseDate:{
        type: Date,
        required:[true, msg]
    },
    trailer:{
        type: String,
        required:[true, msg]
    },
    rating:{
        type: String,
        default:0, 
    },
    topCast:{
        type: Array,
        required:[true, msg]
    },
    director:{
        type: String,
        required:[true, msg]
    },
    productionStudio:{
        type: String,
        required:[true, msg]
    },
    seenBy:{
        type: String,
        default:0, 
    },
    duration:{
        type: String,
        required:[true, msg]
    },
    vendorId:{
        type: String, 
        required:[true, msg]
    },  
    cinemaId:{
        type: String, 
        required:[true, msg]
    },
})

const moviesModel = mongoose.model("movies", moviesSchema)
module.exports = moviesModel;

