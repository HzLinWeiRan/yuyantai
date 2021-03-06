const Koa = require('koa')
const http = require('http')
const bodyParser = require('koa-bodyparser')
const koaBody = require('koa-body')
const serve = require('koa-static-server')
const koaJwt = require('koa-jwt')
const config = require('config')
const convert = require('koa-convert')
const cors = require('koa-cors')
// const convert = require('koa-convert')

const logicMiddleware = require('./middleware/logicMiddleware.js')
const respondMiddleware = require('./middleware/respondMiddleware.js')
const errorMiddleware = require('./middleware/errorMiddleware.js')
const authMiddleware = require('./middleware/authMiddleware.js')

const jwtConfig = config.get('jwt')
const { secret } = jwtConfig
const { rootDir, rootPath } = config.get('upload')

const app = new Koa()

const routerIndex = require('./controller')

// post 请求参数转换
app.use(bodyParser())
// session 配置
// app.keys = [ 'a', 'b' ]
// app.use(session({
//     key: 'sess:id'
// }))

app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 200*1024*1024    // 设置上传文件大小最大限制，默认2M
    }
}))

app.use(convert(cors({
    maxAge: 1000000
})))
// 日志系统介介入
app.use(logicMiddleware)
// 返回参数方法接入
app.use(respondMiddleware)
// 错误信息处理
app.use(errorMiddleware)
// 接口路由控制

app.use(koaJwt({
    secret
}).unless({
    path: [
        /^\/(?!admin)/,
    ]
}))

app.use(authMiddleware)

app.use(serve({
    rootDir,
    rootPath
}))

app.use(routerIndex.routes())
app.use(routerIndex.allowedMethods())

http.createServer(app.callback()).listen(8080)