const mongoose = require('mongoose')
const config = require('config')

const mongodbConfig = config.get('mongodb')

const { url, conf } = mongodbConfig

mongoose.connect(url, conf)

module.exports = {
    UserModel: require('./userModel')
}