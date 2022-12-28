'use strict'

let express = require('express')
let bodyParser = require('body-parser')

let app= express()

//Cargar archivos de Rutas

//Middlewares
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//CORS

//Cargar rutas
app.get('/', (req,res)=>{
    res.status(200).send(
        "<h1>Página de inicio</h1>"
    )
})

app.post('/test', (req,res)=>{
    console.log(req.body.nombre);
    console.log(req.query.web);
    console.log(req.params.id);

    res.status(200).send({
        message:'Hola mundo desde mi api nodejs'
    })
})
//exportar

module.exports = app
