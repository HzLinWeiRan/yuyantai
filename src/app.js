const Koa = require('koa')
const bodyparser = require('koa-bodyparser')

const logicMiddleware = require('./middleware/logicMiddleware.js')
const respondMiddleware = require('./middleware/respondMiddleware.js')
const errorMiddleware = require('./middleware/errorMiddleware.js')

const app = new Koa()

const routerIndex = require('./controller')

app.use(bodyparser())
app.use(logicMiddleware)
app.use(respondMiddleware)
app.use(errorMiddleware)
app.use(routerIndex.routes())
app.use(routerIndex.allowedMethods())

app.listen(4000)