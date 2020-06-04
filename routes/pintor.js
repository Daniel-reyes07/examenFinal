//se declara express
const express = require('express');
//routear los pintores
let pintor = require('../controllers/pintoresController.js');
//crear rutas
let router = express.Router();
//dar imagen hbs del index
router.get('/',pintor.list);
//exportar router
module.exports = router;