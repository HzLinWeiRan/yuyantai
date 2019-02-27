const createModel = require('../utils/createModel')

module.exports = createModel('ad', {
    name: String,
    url: String,
    desc: String
})