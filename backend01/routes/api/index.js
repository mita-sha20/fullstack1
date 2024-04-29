const express = require('express')
const route = express.Router()
const auth = require('./auth')
const productroute = require('./productroute')

route.use('/auth', auth)
route.use('/product', productroute)


module.exports = route;