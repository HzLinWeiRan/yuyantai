const errorStatus = require('./errorStatus.js')

const {
    NOT_FOUND,
    UNAUTHORIZED,
    INTERNAL_SERVER_ERROR,
    USER_ALREADY_EXISTS,
    ERROR_IN_USERNAME_OR_PASSWORD,
} = errorStatus

module.exports = {
    [UNAUTHORIZED]: 'Unauthorized',
    [NOT_FOUND]: 'Not found',
    [INTERNAL_SERVER_ERROR]: 'Internal server error',
    [USER_ALREADY_EXISTS]: 'User already exists',
    [ERROR_IN_USERNAME_OR_PASSWORD]: 'Error in username or password',
}