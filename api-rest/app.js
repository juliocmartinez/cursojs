'use strict'

let express = require('express')
let bodyParser = require('body-parser')

//Ejecutamos express
let app = express()

//Cargamos los archivos de la ruta

let register_routes = require('./routes/register')


//Cargamos las rutas

//Middlewares
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//Rutas de navegacion
app.use('/api', register_routes)



module.exports = app