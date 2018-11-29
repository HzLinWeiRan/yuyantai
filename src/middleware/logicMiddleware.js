const config = require('config')
const log4js = require('log4js')
const path = require('path')

const log = config.get('log')

const {
    dir,
    logFileName,
    errorFileName
} = log

const commConfig = {
    type: 'dateFile',
    pattern: '.yyyy-MM-dd.hh',
    keepFileExt: true,
    daysToKeep: 1,
    compress: false
}

log4js.configure({
    appenders: {
        info: {
            filename: path.resolve(dir || __dirname, logFileName),
            ...commConfig
        },
        error: {
            filename: path.resolve(dir || __dirname, errorFileName),
            ...commConfig
        },

        justInfo: {
            type: 'logLevelFilter', appender: 'info', level: 'info', maxLevel: 'info'
        },
        justError: {
            type: 'logLevelFilter', appender: 'error', level: 'error'
        }
    },
    categories: { default: { appenders: ['justInfo', 'justError'], level: 'info' } }
})
const logger = log4js.getLogger();

module.exports = async (ctx, next) => {
    ctx.logger = logger
    logger.info(ctx.request)
    await next()
}