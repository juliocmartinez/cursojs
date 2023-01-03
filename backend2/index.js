'use strict'
//Conexion a la base de datos
let mongoose = require('mongoose');
let app = require('./app')
let port = 3800
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/webscraper')
    .then(() => {
        console.log("Conexion a la base de datos establecida");
        //Creamos el servidor
        app.listen(port, () => {
            console.log(`Servidor corriendo correctamente en la url: localhost: ${port}`);
        })
    })
    .catch((error) => {
        console.log('Errores con la conexion a dbWebScraper: ', error);
    })





