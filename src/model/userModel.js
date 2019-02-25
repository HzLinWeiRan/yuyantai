const createModel = require('../utils/createModel')

module.exports = createModel('user', {
    name: {
        type: String,
        unique: true,
    },
    password: String,
    role: String
})