'use strict'

var Proyecto = require('../models/proyecto');

function getProyectos(req, res){
  Proyecto.find({}, (err, proyectos) => {
    if(err){
      res.status(500).send({message: "Error en la petición."});
    }else{
      if(!proyectos){
        res.status(404).send({message: "No se ha encontrado proyectos!!!."});
      }else{
        res.status(200).send({proyectos});
      }
    }
  });
}
function getProyecto(req, res) {
  var proyectoId = req.params.id;
  Proyecto.findById(proyectoId, (err, proyecto) => {
    if(err){
      res.status(500).send({message: 'Error en la petición.'});
    }else{
      if(!proyecto){
        res.status(404).send({message: 'No se ha encontrado el proyecto con la id: '+ proyectoId});
      }else{
        res.status(200).send({proyecto});
      }
    }
  });
}
function saveProyecto(req, res){
  var proyecto = new Proyecto();
  var params = req.body;

  proyecto.title = params.title;
  proyecto.description = params.description;

  proyecto.save((err, proyectoStored) => {
    if(err) {
      res.status(500).send({message:'Error en la petición al servidor.'});
    }else{
      if(!proyectoStored){
        res.status(404).send({message:'No hay proyectos!!'});
      }else{
        res.status(200).send({proyecto: proyectoStored});
      }
    }
  });
}
function updateProyecto(req, res){
  var proyectoId = req.params.id;
  var update = req.body;

  Proyecto.findByIdAndUpdate(proyectoId, update, (err, proyectoUpdate)=>{
    if(err){
      res.status(500).send({message:'Error en la petición.'});
    }else{
      if(!proyectoUpdate){
        res.status(404).send({message: 'No se ha podido actualizar el proyecto.'});
      }else{
        res.status(200).send({proyecto: proyectoUpdate});
      }
    }
  });
}
function deleteProyecto(req, res){
  var proyectoId = req.params.id;

  Proyecto.findByIdAndRemove(proyectoId, (err, proyectoRemove) => {
    if(err){
      res.status(500).send({message:'Error en la petición.'});
    }else{
      if(!proyectoRemove){
        res.status(404).send({message:'No se ha encontrado el proyecto.'});
      }else{
        res.status(200).send({proyecto: proyectoRemove});
      }
    }
  });
}

module.exports = {
getProyectos,
getProyecto,
saveProyecto,
updateProyecto,
deleteProyecto
};
