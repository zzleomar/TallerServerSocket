const Sequelize = require('sequelize');
var sequelize = require('../common/conection');

const UserModel = sequelize.define('users', {
    id: { type:Sequelize.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true},
    username: Sequelize.STRING,
    birthday: Sequelize.DATE,
    date: Sequelize.DATE,
    gender: Sequelize.STRING,
    note: Sequelize.STRING,
    status: Sequelize.BOOLEAN
  });


var all=function(callback){
    console.log("model all");
    UserModel.findAll()
        .then((users)=>{
            callback(null,users);
        });
}

var store=function(data,callback){
    UserModel.create({
        username:data.username,
        birthday:data.birthday,
        date:new Date(),
        gender:data.gender,
        note:data.note,
        status:data.status
    }).then((user)=>{
        callback(null,user);
    });
}

var find=function(id,callback){
    UserModel.find({
        where: {id:id }
    }).then(user => {
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