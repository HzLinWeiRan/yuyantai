const mongoose = require('mongoose')

mongoose.connect('mongodb://39.96.33.199:27017', {
    user: 'yyt',
    pass: 'yyt',
    dbName: 'yuyantai',
    useNewUrlParser: true,
    useCreateIndex: true,
})

module.exports = {
    UserModel: require('./userModel')
}