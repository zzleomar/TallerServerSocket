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
    eventManager.pub('Usuario creado con exito')
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
    eventManager.pub('Usuario editado con exito')
  })
}

function remove (req, res) {
  User.remove(req.params.id, (err, user) => {
    if (err) return res.status(500).send()
    console.log(user)
    res.json(user)
    const eventManager = new EventManager()
    eventManager.sub()
    eventManager.pub('Usuario eliminado con exito')
  })
}

module.exports = {
  all,
  store,
  find,
  update,
  remove
}
