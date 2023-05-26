const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    fullname:{
        type: String,
        require:[true, "field is required"]
    },
    role_id:{
        type: String,
        require:[true, "field is required"]
    },
    password:{
        type: String,
        require:[true, "field is required"]
    },
    email:{
        type: String,
        require:[true, "field is required"]
    },
    gender:{
        type: String,
        require:[true, "field is required"]
    },
    phone:{
        type: String,
        require:[true, "field is required"]
    },
    isVerified:{
        type: String,
        require:[true, "field is required"]
    },
    cinema_id:{
        type: String,
        require:[true, "field is required"]
    },
    vendorId:{
        type: String,
        require:[true, "field is required"]
    }
})

const adminModel = mongoose.model("admins", adminSchema)
module.exports = adminModel;