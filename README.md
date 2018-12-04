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

# redis
````
export HOMEBREW_NO_AUTO_UPDATE=true

brew install redis

```