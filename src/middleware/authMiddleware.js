const redis = require('../utils/redisUtil')

module.exports = async (ctx, next) => {
    const rel = await redis.get(ctx.header.authorization)
    if (rel) {
        ctx.throw(401)
    } else {
        await next()
    }
}