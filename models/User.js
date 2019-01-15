const Sequelize = require('sequelize');
var sequelize = require('../common/conection');

const UserModel = sequelize.define('users', {
    id: { type:Sequelize.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true},
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
  },{
        indexes: [
            {
                unique: true,
                fields: ['id']
            }
        ],
    }
);


var all=function(callback){
    console.log("model all");
    UserModel.findAll()
        .then((users)=>{
            callback(null,users);
        });
}

var store=function(user,callback){
    UserModel.create({
        username:user.username,
        birthday:new Date()
    }).then((user)=>{
        callback(null,user);
    });
}

var find=function(id,callback){
    UserModel.findById(id).then(user => {
        callback(null,user);
    });
}

var update=function(id,user,callback){
    UserModel.update(
        { username: user.username, birthday:user.birthday },
        { where: { id: id }} 
      ).then(user => {
        callback(null,user);
    });
}

var remove=function(id,callback){
    UserModel.destroy({ 
        where: { id: id }
        } 
      ).then(user => {
        callback(null,user);
    });
}

module.exports={
	all
    ,store
    ,find
    ,update
    ,remove
    ,UserModel
}