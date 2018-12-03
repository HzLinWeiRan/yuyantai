const errorStatus = require('./errorStatus.js')

const {
    NOT_FOUND,
    UNAUTHORIZED,
    INTERNAL_SERVER_ERROR
} = errorStatus

module.exports = {
    [UNAUTHORIZED]: 'Unauthorized',
    [NOT_FOUND]: 'Not found',
    [INTERNAL_SERVER_ERROR]: 'Internal server error',
}