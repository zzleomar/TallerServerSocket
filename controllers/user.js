const User = require('../models/User.js')

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
  })
}

function remove (req, res) {
  User.remove(req.params.id, (err, user) => {
    if (err) return res.status(500).send()
    console.log(user)
    res.json(user)
  })
}

module.exports = {
  all,
  store,
  find,
  update,
  remove
}
