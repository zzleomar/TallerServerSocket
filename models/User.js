const Sequelize = require('sequelize')
var sequelize = require('../common/conection')

const UserModel = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  username: Sequelize.STRING,
  birthday: Sequelize.DATE,
  date: Sequelize.DATE,
  gender: Sequelize.STRING,
  note: Sequelize.STRING,
  status: Sequelize.BOOLEAN
})

var all = function (callback) {
  UserModel.findAll().then(users => {
    callback(null, users)
  })
}

var store = function (data, callback) {
  UserModel.create({
    username: data.username,
    birthday: data.birthday,
    date: new Date(),
    gender: data.gender,
    note: data.note,
    status: data.status
  }).then(user => {
    callback(null, user)
  })
}

var find = function (id, callback) {
  UserModel.find({
    where: { id: id }
  }).then(user => {
    callback(null, user)
  })
}

var update = function (id, user2, callback) {
  UserModel.update(
    { username: user2.username, birthday: user2.birthday },
    { where: { id: id } }
  ).then(response => {
    if (response !== 0) {
      callback(null, user2)
    } else {
      callback(null, 0)
    }
  })
}

var remove = function (id, callback) {
  UserModel.destroy({
    where: { id: id }
  }).then(response => {
    if (response !== 0) {
      callback(null, id)
    } else {
      callback(null, 0)
    }
  })
}

module.exports = {
  all,
  store,
  find,
  update,
  remove,
  UserModel
}
