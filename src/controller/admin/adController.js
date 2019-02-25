const Router = require('koa-router')
const { AdProxy } = require('../../proxy')

const adController = new Router({
    prefix: '/ads'
})

adController.get('/', async (ctx) => {
    const res = await AdProxy.find({})
    const res2 = await findPage.findPage({})
    ctx.ok(res2)
})

adController.post('/', async (ctx) => {
    const res = await AdProxy.find({})
    const res2 = await findPage.findPage({})
    ctx.ok(res2)
})

adController.save

module.exports = adController