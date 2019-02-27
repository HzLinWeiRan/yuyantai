const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const mongooseDelete = require('mongoose-delete')

const { Schema } = mongoose

const createModel = (name, data, options) => {
    const mSchema = new Schema({
        ...data
    }, {
        versionKey: false,
        timestamps: true,
        ...options
    })
    mSchema.plugin(mongoosePaginate)
    mSchema.plugin(mongooseDelete)
    
    const Model = mongoose.model(name, mSchema)
    return Model
}

module.exports = createModel