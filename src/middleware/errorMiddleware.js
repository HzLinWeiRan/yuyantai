const errorStatus = require('../utils/errorMsg.js')

module.exports = async (ctx, next) => {
    // await next()
    // if (ctx.status === 404) {
    //     ctx.throw(404)
    // }
    try {
        await next()
        if (ctx.status === 404) {
            ctx.throw(404)
        }
    } catch (err) {
        ctx.logger.error(ctx.request, err)
        const status = err.code || err.statusCode || err.status
        ctx.error(status, errorStatus[status])
    }
}
