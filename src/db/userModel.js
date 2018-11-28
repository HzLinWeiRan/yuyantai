const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        unique:true,
    },
    password: String,
    role: String,
}, {
    _id: true,
    autoIndex: false,
    id: true
})

const UserModel = mongoose.model('user', userSchema)

module.exports = UserModel