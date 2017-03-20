'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProyectoSchema = Schema({
		title: String,
		description: String
	});
module.exports = mongoose.model('Proyecto', ProyectoSchema);
