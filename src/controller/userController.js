const Router = require('koa-router')
const { userProxy } = require('../proxy')


const userController = new Router({
    prefix: '/user'
})

userController.get('/query', async (ctx) => {
    // ctx.ok({
    //     mesg: 1231
    // })
    ctx.ok(await userProxy.find({}))
})

userController.post('/save', async (ctx) => {
    // ctx.ok({
    //     mesg: 1231
    // })
    const {
        name,
        password,
        role
    } = ctx.request.body
    ctx.ok(await userProxy.save({
        name,
        password,
        role
    }))
})

module.exports = userController