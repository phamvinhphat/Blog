const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PostSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    content: {
        type: String,
        required : true
    },
    author: {
        type: String,
        required : true,
    },
    url: String,
    likeCount:{
        type: Number,
        default:0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref:'users'
    }
})
module.exports = mongoose.model('posts',PostSchema)