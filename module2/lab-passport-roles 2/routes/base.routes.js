const express = require('express')
const router = express.Router()

const bcrypt = require("bcrypt");
const bcryptSalt = 10;

const checkLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.render('auth/login', {
    message: 'Desautorizado, incia sesión para continuar'
})

// Endpoints
router.get('/', (req, res) => res.render('index'))

module.exports = router