//Configuración de express
'use strict'

let express = require('express')
let bodyParser = require('body-parser')

//Ejecutar express
let app = express()


//Cargar archivos de Rutas
let scraper_routes = require('./routes/scraper')

//Middlewares
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//CORS  

//Rutas de navegacion//Todas las rutas van a llevar primero /api y a use le paso las rutas
app.use('/api', scraper_routes)

//Exportar modulos
module.exports = app;
