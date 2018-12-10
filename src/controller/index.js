const Router = require('koa-router')

const loginController = require('./loginController')
// const routerApi = require('./api')
// const adminApi = require('./admin')

const routerIndex = new Router()

const regRouter = (router) => {
    routerIndex.use(router.routes(), router.allowedMethods())
}

regRouter(loginController)
// 业务接口
// routerIndex.use(routerApi.routes(), routerApi.allowedMethods())
// // 管理后台接口
// routerIndex.use(adminApi.routes(), adminApi.allowedMethods())

module.exports = routerIndex