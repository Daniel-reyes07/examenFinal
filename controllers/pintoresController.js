//se declara mongoose para llamar a la db
const mongoose = require('mongoose');
//se enlaza mongoose al modelo
let pintores = require('../models/pintores');

let pintoresController = {};

//listar = find
pintoresController.list = (req,res)=>{
    pintores.find({})
        .limit(20)
        .skip(0)
        .exec((err,pintor)=>{
            //si existe un error, imprimirlo
            if(err){
                console.log('Error: ',err);
            }
            res.render('../views/index',{
                pintores:pintor,
                titulo:"Listado de pintores",
                fecha: new Date(Date.now()),
                nombre:"Daniel Efren Reyes Casillas",
                grupo:"4E"
            })
        })

};
//Exportar controlador
module.exports = pintoresController;