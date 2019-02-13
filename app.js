var app = require('express')()
var bodyParser = require('body-parser')
var cors = require('cors')

app.use(cors())

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

// rutas apiREST
var rutas = require('./routes/index')
app.use('/api', rutas)

module.exports = app
