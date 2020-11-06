const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    imgUrl: String,
    title: String,
    description: String,
    price: String,
    stock: String,
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product