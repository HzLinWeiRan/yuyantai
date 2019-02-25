const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const { Schema } = mongoose

const createModel = (name, data, options) => {
    const mSchema = new Schema({
        createTime: {
            type: Date,
            default: Date.now
        },
        updateTime: {
            type: Date,
            default: Date.now
        },
        ...data
    }, {
        timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' },
        ...options
    })
    mSchema.plugin(mongoosePaginate)
    
    const Model = mongoose.model(name, mSchema)
    return Model
}

module.exports = createModel