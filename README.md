# 1. node-koa-jwt-redis-mongoose #

```
src
├── app.js
├── controller
│   ├── admin
│   │   └── index.js
│   ├── api
│   │   └── index.js
│   ├── index.js
│   └── loginController.js
├── middleware
│   ├── authMiddleware.js
│   ├── errorMiddleware.js
│   ├── logicMiddleware.js
│   └── respondMiddleware.js
├── model
│   ├── index.js
│   └── userModel.js
├── proxy
│   ├── index.js
│   └── userPorxy.js
└── utils
    ├── errorMsg.js
    ├── errorStatus.js
    └── redisUtil.js
config
├── default.json
└── production.json
```
# koa
Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。 通过利用 async 函数，Koa 帮你丢弃回调函数，并有力地增强错误处理。 Koa 并没有捆绑任何中间件， 而是提供了一套优雅的方法，帮助您快速而愉快地编写服务端应用程序

# koa-router
# koa-respond

# redis
```
export HOMEBREW_NO_AUTO_UPDATE=true

brew install redis

```

# mongodb + mongoose
如果想要在NodeJS中连接MongoDB，可以选择直接使用mongodb为NodeJS写的驱动包，但我更推荐使用一个比较成熟的中间件：Mongoose。

Mongoose：优雅地在NodeJS中进行MongoDB对象建模
```
brew install mongodb
brew services start
```

# jwt
cookie-session是传统的鉴权方式，前端将sessionid 存在cookie，后台根据sessionid查找对应的session

jwt 后台不需要存储用户数据,token包含用户基本信息以及过期时间，后台通过判断该token是否可以通过验证以及是否过期完成用户鉴权

优点


1. 如何实现退出登陆的操作
2. 如果实现用户续签操作