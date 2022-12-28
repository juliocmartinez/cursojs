'use strict'
let mongoose = require('mongoose');
let app = require('./app')
let port = 3700
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/portafolio')
    .then(()=>{
        console.log("Conexión a la base de datos exitosa");
        //Creación del servidor
        app.listen(port, ()=>{
            console.log("Servidor corriendo correctamente en la url: localhost:3700");
        })
    })
    .catch(error=>console.log("Problemas con la conexion: ",error))
