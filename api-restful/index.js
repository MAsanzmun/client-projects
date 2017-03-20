'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3700;

mongoose.connect('mongodb://localhost:27017/proyecto', (err, res)=>{
		if(err) {
			throw err;
			console.log("Error al conectar");
		}else{
			console.log("Base de Datos funcionando correctamente.");
			app.listen(port, function(){
				console.log("API RESTFUL de albums escuchando....");
			});
		}

	});
