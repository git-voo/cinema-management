const mongoose = require("mongoose") 
const schema =  mongoose.Schema
const msg ="Field is required"
const userSchema = new schema({
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
    verification_code:{
      type:String,
      required:[true, msg]
    },
    
    is_verified:{
      type:Boolean,
      required:[true, msg]
    }
    //MODEL SHOULD INCLUDE AN ELEMENT THAT HOLDS VERIFICATION CODE
    
})


const user_model = mongoose.model("users", userSchema);
module.exports = user_model;