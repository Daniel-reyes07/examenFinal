//Se declara mongoose para llamar a la db
let mongoose = require('mongoose');
//crear un schema para conectar con la db
let Schema = mongoose.Schema;

//crear coleccion de la DB y sus parametros
let pintoresSchema = new Schema({
    name:{
        type:String,
        required: [true, 'se requiere el nombre']
    },
    estilo:{
        type: String,
        required: [true, 'se requiere el estilo']
    },
    nacionalidad:{
        type:String
    },
    pintura:{
        type:String
    },
    datos:{
        type:String,
        required:[true, 'se requieren los datos del pintor']
    }
});
module.exports = mongoose.model('pintores', pintoresSchema);
