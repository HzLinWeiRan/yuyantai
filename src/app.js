const Koa = require('koa')
const respondMiddleware = require('./middleware/respondMiddleware.js')
const errorMiddleware = require('./middleware/errorMiddleware.js')


const app = new Koa()
app.use(respondMiddleware)
app.use(errorMiddleware)

const routerIndex = require('./controller')

app.use(routerIndex.routes())
app.use(routerIndex.allowedMethods())

app.listen(4000)