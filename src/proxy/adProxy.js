const { AdModel } = require('../model')

module.exports = {
    async find(query) {
        return AdModel.find(query).exec()
    },
    async findPage(query) {
        return AdModel.find(query, {
            page: 1,
            limit: 10
        })
    }
}