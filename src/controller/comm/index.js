const Router = require('koa-router')
const accountController = require('./accountController')
const adController = require('./adController')
const uploadController = require('./uploadController')

const commController = new Router({
    prefix: '/comm'
})

const regRouter = (router) => {
    commController.use(router.routes(), router.allowedMethods())
}

regRouter(accountController)
regRouter(uploadController)
// regRouter(adController)

module.exports = commController