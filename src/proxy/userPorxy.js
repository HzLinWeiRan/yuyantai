const { UserModel } = require('../db')

module.exports = {
    async find(query) {
        // const data = await new Promise(resolve => {
        //     UserModel.find(query, 'name role', { skip: 1 } , (error, datas) => {
        //         if (error) {
        //             throw (error)
        //         }
        //         resolve(datas)
        //     })
        // })
        // return data
        return  UserModel.find(query).select('name role').skip(3).limit(3).exec()
    },
    async save(user) {
        const data = await new Promise(resolve => {
            const model = new UserModel(user)
            model.save(error => {
                if (error) {
                    throw (error)
                }
                resolve(model)
            })
        })
        return data
    }
}