const express = require('express')
const router = express.Router()

const Park = require('../models/park.model')
const Coaster = require('../models/coaster.model')

// Aquí los endpoints
router.get('/', (req, res) => res.render('coasters/coasters-index'))

router.get('/new', (req, res) => res.render('coasters/new-coaster'))

router.post('/new', (req, res) => {
    const {
        name,
        description,
        inversions,
        length,
        active,
        park
    } = req.body

    Coaster.create({
            name,
            description,
            inversions,
            length,
            active,
            park
        })
        .then(() => res.redirect('/coasters'))
        .catch(err => console.log(err))
})

router.post('/:coaster_id/delete', (req, res) => {
    const id = req.params.coaster_id
    Coaster.findByIdAndDelete(id)
        .then(() => res.redirect('/coasters'))
        .catch(err => console.log(err))
})

router.get('/:coaster_id', (req, res) => {
    const id = req.params.coaster_id
    Coaster.findById(id)
        .then(coasterDetails => res.render('coasters/coaster-details', coasterDetails))
        .catch(err => console.log(err))
})

module.exports = router