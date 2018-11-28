const respond = require('koa-respond')

module.exports = respond({
    methods: {
        ok: (ctx, data) => {
            ctx.body = {
                code: 200,
                data: data
            }
        },
        error: (ctx, errorCode, message) => {
            ctx.body = {
                code: errorCode,
                message: message
            }
        }
    }
})