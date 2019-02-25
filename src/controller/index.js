const Router = require('koa-router')

const apiController = require('./api/index')
const adminController = require('./admin/index')
// const routerApi = require('./api')
// const adminApi = require('./admin')

const routerIndex = new Router()

const regRouter = (router) => {
    routerIndex.use(router.routes(), router.allowedMethods())
}

// regRouter(adminController)
regRouter(adminController)
regRouter(apiController)
// 业务接口
// routerIndex.use(routerApi.routes(), routerApi.allowedMethods())
// // 管理后台接口
// routerIndex.use(adminApi.routes(), adminApi.allowedMethods())

module.exports = routerIndex