const { AdModel } = require('../model')

module.exports = {
    async find(query) {
        return AdModel.find(query).exec()
    },
    async findPage(query, option) {
        return AdModel.paginate({
            ...query,
            deleted: false
        }, option)
    },
    async insert(data) {
        return new AdModel(data).save()
    },
    async deleteById(_id) {
        return AdModel.deleteById(_id)
    }
}