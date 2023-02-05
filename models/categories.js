const mongoose = require("mongoose")
const schema =  mongoose.Schema
const msg = "Field is required"

const categoriesSchema = new schema({
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