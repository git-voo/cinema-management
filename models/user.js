const mongoose = require("mongoose") 
const schema = new mongoose.Schema
const msg ="Field is required"
const userSchema = schema({
    fullname:{
        type:String,
        required:[true, msg]
    },

      email:{
        type:String,
        required:[true, msg]
    },

      password:{
        type:String,
        required:[true, msg]
    },

      phone:{
        type:String,
        required:[true, msg]
    },

      gender:{
        type:String 
    },

    vendor_id:{
        type:String,
        required:[true, msg]
    },
    
    is_verified:{
      type:String,
      required:[true, msg]
    }
    //MODEL SHOULD INCLUDE AN ELEMENT THAT HOLDS VERIFICATION CODE
    
})


const user_model = mongoose.model("Users", userSchema);
module.exports = user_model;