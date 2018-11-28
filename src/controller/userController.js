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

userController.get('/save', async (ctx) => {
    // ctx.ok({
    //     mesg: 1231
    // })
    ctx.ok(await userProxy.save({
        name: `linwr${new Date().getTime()}`,
        password: '123456',
        role: 'user'
    }))
})

module.exports = userController