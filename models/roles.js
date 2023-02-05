const mongoose = require("mongoose")
const schema = mongoose.Schema
const msg = "Field is required"

const rolesSchema = new schema({
    name:{
        type:String,
        required:[true, msg]
    }   
    //name sample: counter, therater, vendor, content
    
})

const roles_model = mongoose.model("roles", rolesSchema)
module.exports = roles_model;