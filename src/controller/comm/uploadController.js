const Router = require('koa-router')
const config = require('config')
const copyFileSync = require('fs-copy-file-sync')

const { rootDir, rootPath } = config.get('upload')
const { COPYFILE_EXCL } = copyFileSync.constants
const uploadController = new Router()

uploadController.post('/upload', async (ctx) => {
    const { file } = ctx.request.files
    const filename = file.path.split('/').pop()
    const suffix = file.name.split('.').pop()
    copyFileSync(file.path, `${rootDir}/${filename}.${suffix}`, COPYFILE_EXCL)
    ctx.ok(`${rootPath}/${filename}.${suffix}`)
})

module.exports = uploadController