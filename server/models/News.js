const mongoose = require('mongoose');
const Schema = mongoose.Schema

const NewsSchema = new Schema({
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
    attachment: String,
    likeCount:{
        type: Number,
        default: 0
    },
    
    createAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref:'users'
    }
})

module.exports = mongoose.model('news',NewsSchema)