const User = require('../models/User.js')
const EventManager = require('../event-manager.js')

// Arquitectura rest

function all (req, res) {
  User.all((err, users) => {
    if (err) return res.status(500).send()
    res.send(users)
  })
}

function store (req, res) {
  User.store(req.body, (err, user) => {
    if (err) return res.status(500).send()
    res.json(user)
    const eventManager = new EventManager()
    eventManager.sub()
    eventManager.pub({ msg: 'Usuario creado con exito', data: user, type: 'store' })
  })
}

function find (req, res) {
  User.find(req.params.id, (err, user) => {
    if (err) return res.status(500).send()
    res.send(user)
  })
}

function update (req, res) {
  User.update(req.params.id, req.body, (err, user) => {
    if (err) return res.status(500).send()
    res.json(user)
    const eventManager = new EventManager()
    eventManager.sub()
    eventManager.pub({ msg: 'Usuario editado con exito', data: user, type: 'update' })
  })
}

function remove (req, res) {
  User.remove(req.params.id, (err, user) => {
    if (err) return res.status(500).send()
    console.log(user)
    res.json(user)
    const eventManager = new EventManager()
    eventManager.sub()
    eventManager.pub({ msg: 'Usuario eliminado con exito', data: user, type: 'remove' })
  })
}

module.exports = {
  all,
  store,
  find,
  update,
  remove
}
