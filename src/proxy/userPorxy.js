const { UserModel } = require('../model')

module.exports = {
    async find(query) {
        return  UserModel.find(query).select('name role').skip(0).limit(500).exec()
    },
    async save(user) {
        return new Promise((resolve, reject) => {
            const model = new UserModel(user)
            model.save(error => {
                if (error) {
                    reject(error)
                } else {
                    resolve(model._id)
                }
            })
        })
    }
}