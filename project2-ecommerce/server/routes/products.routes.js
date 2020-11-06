const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Product = require('./../models/product.model')


// Endpoints
router.get('/getAllProducts', (req, res) => {

    Product.find()
        .then(response => res.json(response))
        .catch(() => res.status(500).json({ message: 'Database Error' }))
})

router.get('/getOneProduct/:product_id', (req, res, next) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.product_id)) {
        res.status(400).json({ message: 'Specified id is not valid' })
        return
    }

    Product.findById(req.params.product_id)
        .then(response => res.json(response))
        .catch(() => res.status(500).json({ message: 'Database Error' }))
})

router.post('/newProduct', (req, res, next) => {
    Product.create(req.body)
        .then(response => res.json(response))
        .catch(() => res.status(500).json({ message: 'Database Error' }))
})

router.put('/:product_id/editProduct', (req, res, next) => {

    Product.findByIdAndUpdate(req.params.product_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.delete('/:product_id/delete', (req, res, next) => {
    Product.findByIdAndDelete(req.params.product_id)
        .then(response => res.json(response))
        .catch(() => res.status(500).json({ message: 'Database Error' }))
})


module.exports = router
