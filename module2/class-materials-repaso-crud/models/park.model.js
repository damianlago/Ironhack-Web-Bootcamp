const mongoose = require('mongoose')
const Schema = mongoose.Schema

const parkSchema = new Schema({
    name: String,
    description: String,
    active: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('Park', parkSchema)