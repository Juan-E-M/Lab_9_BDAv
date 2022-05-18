var mongoose = require('mongoose');
var Profesor= require("../models/Profesor");

var profesorController = {};

profesorController.list = function(req, res){
    
    Profesor.find({}).exec(function(err, profesores){
        if( err ){ console.log('Error: ', err); return; }
        console.log("The INDEX");
        res.render('../views/profesor/index', {profesores: profesores,titulo:'INDEX'} );
        
    });
    
};

profesorController.show = function(req, res){
    Profesor.findOne({_id: req.params.id}).exec(function(err, profesor){
        if( err ){ console.log('Error: ', err); return; }
        
        res.render('../views/profesor/show', {profesor: profesor} );
    });
    
};

profesorController.create = function(req, res){
    res.render('../views/profesor/create');
};

profesorController.save = function(req, res){
    var profesor = new Profesor( req.body );
    
    profesor.save(function(err){
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("Successfully created a profesor. :)");
        res.redirect("/profesores/show/"+profesor._id);
        //res.redirect("/profesores");
    });
};

profesorController.edit = function(req, res) {
    Profesor.findOne({_id: req.params.id}).exec(function (err, profesor) {
    if (err) { console.log("Error:", err); return; }
    
    res.render("../views/profesor/edit", {profesor: profesor});
    
  });
};

profesorController.update = function(req, res){
    Profesor.findByIdAndUpdate( req.params.id, {$set: {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        grado_de_estudio: req.body.grado_de_estudio,
        curso: req.body.curso,
        sexo:req.body.sexo,
        telefono:req.body.telefono

    }}, { new: true },
    function( err, profesor){
        if( err ){ 
            console.log('Error: ', err); 
            res.render('../views/profesor/edit', {profesor: req.body} );
        }
        
        console.log( profesor );
        
        res.redirect('/profesores/show/' + profesor._id);
        
    });
};

profesorController.delete = function(req, res){
    
    Profesor.remove({_id: req.params.id}, function(err){
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("Profesor deleted!");
        res.redirect("/profesores");
    });
    
};

module.exports = profesorController;
