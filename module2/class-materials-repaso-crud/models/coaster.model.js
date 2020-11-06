const mongoose = require('mongoose')
const Schema = mongoose.Schema

const coasterSchema = new Schema({
    name: String,
    description: String,
    inversions: Number,
    length: Number,
    active: {
        type: Boolean,
        default: true
    },
    park: {
        type: Schema.ObjectId,
        ref: 'Park'
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('Coaster', coasterSchema)