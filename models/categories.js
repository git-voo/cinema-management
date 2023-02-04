const mongoose = require("mongoose")
const schema = new mongoose.Schema
const msg = "Field is required"

const categoriesSchema = schema({
    name:{
        type:String,
        required:[true, msg]
    },


        price:{
        type:Number,
        required:[true, msg]
    },


        vendor_id:{
        type:String,
        required:[true, msg]
    }
 
    
})

const categories_model = mongoose.model("categories", categoriesSchema)
module.exports = categories_model;