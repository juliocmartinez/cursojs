'use strict'
//Molde para crear los scrapers en la db
let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let scraperSchema = Schema({
    name: String,
    price:Number,
    direction:String,
    image:String,
    features:String,
    bedroom:String,
    size:String,
    bathroom:String
})


//Exportamos el modelo
//parametro 1 nombre de la entidad - parametro 2 esquema

module.exports = mongoose.model('Scraper', scraperSchema)
