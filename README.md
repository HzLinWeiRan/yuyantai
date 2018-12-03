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