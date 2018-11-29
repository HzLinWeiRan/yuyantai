const errorStatus = require('../utils/errorMsg.js')

module.exports = async (ctx, next) => {
    try {
        await next()
        if (ctx.status === 404) {
            ctx.throw(404)
        }
    } catch (err) {
        ctx.logger.error(ctx.request, err)
        const status = err.status || 500
        ctx.status = status
        ctx.error(status, errorStatus[status])
    }
}
