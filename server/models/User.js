const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema ({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true
    },
    Address:{
        type: String,
    },
    FullName:{
        type: String,
    },
    NumberPhone:{
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('users',UserSchema)
