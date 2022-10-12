const express = require('express')
const routes = express.Router()
const { signUp,signIn } = require('../Controller/auth')
const {checkDuplicateUsernameAndEmail,checkRoles} = require('../middleware/user')

 routes.post('/api/books/v1/signup',[checkDuplicateUsernameAndEmail],[checkRoles],
signUp)


routes.post('/api/books/v1/signIn',signIn)

module.exports = {authRoutes : routes}