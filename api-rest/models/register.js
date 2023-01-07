'use strict'
//Creamos el molde para guardar registros de personas

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let registerSchema = Schema({
    name:String,
    apellido:String,
    edad:Number,
    image:String
})

module.exports = mongoose.model('Register', registerSchema)