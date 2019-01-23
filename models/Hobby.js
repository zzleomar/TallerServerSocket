const Sequelize = require('sequelize');
var sequelize = require('../common/conection');

const HobbyModel = sequelize.define('hobbies', {
    id: { type:Sequelize.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true},
    hobby: Sequelize.STRING
  });


module.exports={
	HobbyModel
}