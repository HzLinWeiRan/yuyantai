const Router = require('koa-router')
const jwt = require('jsonwebtoken')
const config = require('config')
const errorStatus = require('../../utils/errorStatus')

const { userProxy } = require('../../proxy')
const redis = require('../../utils/redisUtil')
const { refreshSecret, refreshExpiresIn, secret, expiresIn } = config.get('jwt')

const loginController = new Router({
    prefix: '/account'
})

const destroyToken = async (authToken, ss) => {
    const authorization = authToken.split(' ')[1]
    const decoded = jwt.verify(authorization, ss)
    const extime = Math.ceil(decoded.exp - (Date.now() / 1000))
    redis.set(authToken, true, 'EX', extime)
    if (extime > 0) {
        await redis.set(authToken, true, 'EX', extime)
    }
}

// 用户登陆
loginController.post('/login', async (ctx) => {
    const { name, password } = ctx.request.body
    const user = await userProxy.findOne({
        name,
        password
    })
    if (user) {
        const token = jwt.sign({
            name,
            exp: Math.floor(Date.now() / 1000) + expiresIn
        }, secret)
        const refreshToken = jwt.sign({
            name,
            exp: Math.floor(Date.now() / 1000) + refreshExpiresIn
        }, refreshSecret)
        ctx.ok({
            token,
            refreshToken
        })
    } else {
        // ctx.throw(errorStatus.ERROR_IN_USERNAME_OR_PASSWORD)
        ctx.throw({
            code: errorStatus.ERROR_IN_USERNAME_OR_PASSWORD
        })
    }
})
// 退出登陆标记token在一段时间内不可用
loginController.post('/logout', async (ctx) => {
    await destroyToken(ctx.header.authorization, secret)
    await destroyToken(ctx.header.refreshAuthorization, refreshSecret)
    ctx.ok('success')
})

// jwt token 续签
loginController.post('/refreshToken', async (ctx) => {
    const { refreshauthorization } = ctx.header
    if (!refreshauthorization.startsWith('Bearer ')) {
        ctx.throw(errorStatus.UNAUTHORIZED)
    }
    try {
        await destroyToken(refreshauthorization, refreshSecret)
        const authorization = refreshauthorization.split(' ')[1]
        const decoded = jwt.verify(authorization, refreshSecret)
        // 返回新的token
        const token = jwt.sign({
            name: decoded.name,
            exp: Math.floor(Date.now() / 1000) + expiresIn
        }, secret)
        const refreshToken = jwt.sign({
            name: decoded.name,
            exp: Math.floor(Date.now() / 1000) + refreshExpiresIn
        }, refreshSecret)
        ctx.ok({
            token,
            refreshToken
        })
    } catch (e) {
        ctx.throw(errorStatus.UNAUTHORIZED)
    }
})

// 账号注册
loginController.post('/register', async (ctx) => {
    const { name, password } = ctx.request.body
    await userProxy.save({
        name,
        password
    })
    const token = jwt.sign({
        name,
        exp: Math.floor(Date.now() / 1000) + expiresIn
    }, secret)
    ctx.ok(token)
})

// 获取当前用户信息
loginController.get('/getUser', async (ctx) => {
    ctx.ok(ctx.state.user)
})

loginController.get('/userList', async (ctx) => {
    const res = await userProxy.find({})
    ctx.ok(res)
})

module.exports = loginController