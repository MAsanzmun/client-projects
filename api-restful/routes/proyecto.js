'use strict'

var express = require('express');
var ProyectoController = require('../controllers/proyecto');
var api = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './uploads' });



api.get('/proyectos', ProyectoController.getProyectos);
api.get('/proyecto/:id', ProyectoController.getProyecto);
api.post('/proyecto', ProyectoController.saveProyecto);
api.put('/proyecto/:id', ProyectoController.updateProyecto);
api.delete('/proyecto/:id', ProyectoController.deleteProyecto);

module.exports = api;
