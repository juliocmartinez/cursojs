'use strict'

//Objeto mongoose para conectarme a la db
let mongoose = require('mongoose')
//Configuración de express
let app = require('./app')
//Puerto para la conexion
let port = 3900
//Conexion a la base de datos
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/registerperson')
    .then(() => { 
        console.log('Conexion a la db establecida con exito...'); 

        //Crear el servidor
        app.listen(port, ()=>{
            console.log(`Creacion exitosa del servidor con el port: ${port}`);
        })
    })
    .catch((error) => { console.log('Error en la conexion a la db: ', error); })


