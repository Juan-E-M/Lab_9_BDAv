var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProfesorSchema = new Schema({
    _id: {type: String, required: true, max: 20},
    nombres: {type: String, required: true, max: 20},
    apellidos: {type: String, required: true, max: 20},
    grado_de_estudio: {type: String, required: true, max: 20},
    curso: {type: String, required: true, max: 20},
    sexo: {type: String, required: true, max: 20},
    telefono: {type: String, required: true, max:20}
});

module.exports = mongoose.model('Profesor', ProfesorSchema);