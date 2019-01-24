const express = require('express')
const app = express()
var usuario = require('./user')
app.use('/user', usuario)
module.exports = app
