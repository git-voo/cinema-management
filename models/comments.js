const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    date:{
        type: String,
        required:[true, 'field is required']
    },
    user_id:{
        type: String,
        required:[true, 'field is required']
    },
    movie_id:{
        type: String,
        required:[true, 'field is required']
    },
    text:{
        type: String,
        required:[true, 'field is required']
    },
    vendorId:{
        type: String,
        required:[true, 'field is required']
    }
})

const commentModal = mongoose.modal("comments", commentSchema)
module.exports = commentModal