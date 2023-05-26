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
    vendorId:{
        type: String,
        required:[true, msg]
    },
})
const cinema_model= mongoose.model("cinemas", cinemaSchema)
module.exports=cinema_model