//declarar dependencias
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');

//crear constante para asumir el valor del puerto
const puerto = process.env.PORT || 3000;

//emplear rutas del router
let pintoresRouter = require('./routes/pintor');

//crear sitio web con hbs
const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/partials/');
app.use(express.static(__dirname+'/public'));

//conectar con express la ruta
app.use('/',pintoresRouter);
// conectar la base de datos de mongo
mongoose.promise = global.Promise;
const conexion = 'mongodb+srv://DanielReyes:cbtis122@cbtis122-xtglm.azure.mongodb.net/examenFinal?retryWrites=true&w=majority';
mongoose.connect(conexion,{useNewUrlParser : true,useUnifiedTopology : true})
    .then(()=>{
        console.log('Conexion a MongoDB exitosa :)')
    })
    .catch(err=>console.log(err));
//arrancar el servidor web
app.listen(puerto,()=>{
    console.log('Escuchando el puerto...');
});
//paginas de pintores
app.get('/vincent',(req,res)=>{
    res.render('vincent', {
            titulo: "Vincent van Gogh",
            nombre: "Daniel Efren Reyes Casillas",
            grupo:"4E",
            year : new Date().getFullYear()
        }
    )
})
app.get('/monet',(req,res)=>{
    res.render('monet', {
            titulo: "Claude Monet",
            nombre: "Daniel Efren Reyes Casillas",
            grupo:"4E",
            year : new Date().getFullYear()
        }
    )
})
app.get('/picasso',(req,res)=>{
    res.render('picasso', {
            titulo: "Pablo Picasso",
            nombre: "Daniel Efren Reyes Casillas",
            grupo:"4E",
            year : new Date().getFullYear()
        }
    )
})
app.get('/salvador',(req,res)=>{
    res.render('salvador', {
            titulo: "Salvador Dalí",
            nombre: "Daniel Efren Reyes Casillas",
            grupo:"4E",
            year : new Date().getFullYear()
        }
    )
})
app.get('/leonardo',(req,res)=>{
    res.render('leonardo', {
            titulo: "Leonardo da Vinci",
            nombre: "Daniel Efren Reyes Casillas",
            grupo:"4E",
            year : new Date().getFullYear()
        }
    )
})
