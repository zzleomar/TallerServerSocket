const Sequelize = require('sequelize');
var sequelize = require('../common/conection');
const User=require('../models/User.js').UserModel;
const Hobby=require('../models/Hobby.js').HobbyModel;

const Users_HobbiesModel = sequelize.define('user_hobbies', {
    id : {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: Sequelize.INTEGER,
    },
    hobby_id: {
      type: Sequelize.INTEGER,
    }
  });

// User.belongsToMany(Hobby, {
//     through: {
//         model: Users_Hobbies,
//         unique: false
//     },
//     as:'hobbies',
//     foreignKey: 'user_id',
//     constraints: false
// });

// Hobby.belongsToMany(User, {
//     through: {
//         model: Users_HobbiesModel,
//         unique: false
//     },
//     as:'users',
//     foreignKey: 'hobby_id',
//     constraints: false
// });

module.exports={
	Users_HobbiesModel
}