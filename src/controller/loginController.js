const Router = require('koa-router')
const jwt = require('jsonwebtoken')
const config = require('config')

const { userProxy } = require('../proxy')
const redis = require('../utils/redisUtil')
const { secret, expiresIn } = config.get('jwt')

const loginController = new Router()

// 用户登陆
loginController.post('/login', async (ctx) => {
    const user = {
        name: 'linwr',
        exp: Math.floor(Date.now() / 1000) + expiresIn,
        jti: Date.now()
    }
    const token = jwt.sign(user, secret)

    ctx.ok(token)
})
// 退出登陆标记token在一段时间内不可用
loginController.post('/logout', async (ctx) => {
    const { exp } = ctx.state.user
    const extime = Math.ceil(exp - (Date.now() / 1000))
    if (extime > 0) {
        await redis.set(ctx.header.authorization, true, 'EX', extime)
    }
    ctx.ok('sucess')
})
loginController.get('/getUser', async (ctx) => {
    ctx.ok(ctx.state.user)
})

module.exports = loginController