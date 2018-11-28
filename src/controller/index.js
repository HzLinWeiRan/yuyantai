const Router = require('koa-router')
const UserController = require('./userController')

const routerIndex = new Router()

routerIndex.use(UserController.routes(), UserController.allowedMethods())

module.exports = routerIndex