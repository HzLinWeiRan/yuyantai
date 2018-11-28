const errorStatus = require('./errorStatus.js')

const {
    NOT_FOUND,
    INTERNAL_SERVER_ERROR
} = errorStatus

module.exports = {
    [NOT_FOUND]: 'Not found',
    [INTERNAL_SERVER_ERROR]: 'Internal server error'
}