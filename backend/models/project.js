'use strict'
let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ProjectSchema = Schema({
    name:String,
    descripcion:String,
    category:String,
    year:Number,
    langs:[String]
})

module.exports = mongoose.model('Project', ProjectSchema)