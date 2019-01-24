var config = require('../config')
var Sequelize = require('sequelize')

var sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.driver
  }
)

module.exports = sequelize
