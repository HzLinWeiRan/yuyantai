const Router = require('koa-router')
const adController = require('./adController')

const adminController = new Router({
    prefix: '/admin'
})

const regRouter = (router) => {
    adminController.use(router.routes(), router.allowedMethods())
}

regRouter(adController)
// regRouter(adController)

module.exports = adminController