const mongoose =require("mongoose")
const schema =new mongoose.Schema
const msg= "Field is required"

const bookingsSchema = schema({
    user_id:{
        type: String,
        required: [true,msg]
    },
    ticket_number:{
        type: String,
        required: [true,msg]
    },
    seat_id:{
        type: String,
        required: [true,msg]
    },
    date:{
        type: Date,
        required: [true,msg]
    },
    schedule_id:{
        type: String,
        required: [true,msg]
    },
    total_amount:{
        type: Number,
        required: [true,msg]
    },
    booking_type:{
        type: Boolean,
        required: [true,msg]
        //online/offline
    },
    counter_id:{
        type: String,
        required: [true,msg]
    },
    is_paid:{
        type: Boolean,
        required: [true,msg]
        //true/false
    },
    is_cancelled:{
        type: Boolean,
        required: [true,msg]
        //true/false
    },
    cinema_id:{
        type: String,
        required: [true,msg]
    },
    vendor_id:{
        type: String,
        required: [true,msg]
    },
})

const bookings_model =mongoose.model("bookings", bookingsSchema)
module.exports=bookings_model