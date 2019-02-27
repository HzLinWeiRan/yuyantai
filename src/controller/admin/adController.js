const Router = require('koa-router')
const { adProxy } = require('../../proxy')

const adController = new Router({
    prefix: '/ads'
})

adController.get('/findPage', async (ctx) => {
    const { query } = ctx
    const {
        name,
        page,
        limit
    } = query
    const where = {}
    if (name) where.name = {
        $regex: name
    }
    const res = await adProxy.findPage(where, {
        page: +page,
        limit: +limit
    })
    ctx.ok(res)
})

adController.post('/insert', async (ctx) => {
    const { body } = ctx.request
    const res = await adProxy.insert(body)
    ctx.ok(res)
})

adController.post('/deleteById', async (ctx) => {
    const { _id } = ctx.request.body
    await adProxy.deleteById(_id)
    ctx.ok()
})

module.exports = adController