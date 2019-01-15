const express = require('express');
const UserController = require('../controllers/user');
const  api = express.Router();

//Arquitectura rest

api.get('/', UserController.all);
api.post('/', UserController.store);
api.get('/:id', UserController.find);
api.put('/:id', UserController.update);
api.delete('/:id', UserController.remove);


 module.exports =api;