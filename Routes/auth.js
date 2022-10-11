const express = require('express')
const routes = express.Router()
const { signUp,signIn } = require('../Controller/auth')
// const {checkDuplicateUsernameAndEmail} = require('../middleware')

 routes.post('/api/books/v1/signup',
signUp)
// [checkDuplicateUsernameAndEmail, checkRoles]

routes.post('/api/books/v1/signIn',signIn)

module.exports = {authRoutes : routes}