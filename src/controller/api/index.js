const Router = require('koa-router')
const loginController = require('./accountController')
const adController = require('./adController')

const apiController = new Router({
    prefix: '/api'
})

const regRouter = (router) => {
    apiController.use(router.routes(), router.allowedMethods())
}

regRouter(loginController)
// regRouter(adController)

module.exports = apiController