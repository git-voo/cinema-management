
const mongoose=require("mongoose")
const schema = new mongoose.Schema
const msg ="Field is required"

const theatersSchema =schema({
    name:{
        type: String,
        required: [true, msg]
    },
    total_seats:{
        type: Number,
        required:[true, msg]
    },
    available_seats: {
        type: Number,
        required: [true, msg]
    },
    unavailable_seats:{
        type: Number,
        required:[true, msg]
    },
    total_screen:{
        type: Number,
        required:[true, msg]
    },
    cinema_id:{
        type:String,
        required:[true, msg]
    },
    vendorId:{
        type:String,
        required:[true, msg]
    }

})

const theaters_model= mongoose.model("theaters", theatersSchema)
module.exports = theaters_model
