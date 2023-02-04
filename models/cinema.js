const mongoose=require("mongoose")
const schema = new mongoose.Schema
const msg="Field is required"

const cinemaSchema = schema({
    state:{
        type: String,
        required: [true, msg]
    },
    city:{
        type: String,
        required:[true, msg]
    },
    vendor_id:{
        type: String,
        required:[true, msg]
    },
})
const cinema_model= mongoose.model("cinema", cinemaSchema)
module.exports=cinema_model