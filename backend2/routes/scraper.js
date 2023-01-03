//Configuracion de las rutas

'use strict'

let express = require('express')
let scraperController = require('../controllers/scraper')
//Para acceder a las rutas
let router = express.Router()

//Middleware multiparty para guardar imagenes antes de subirlas
let multipart = require('connect-multiparty')
let multipartMiddleware = multipart({uploadDir:'./uploads'})


router.get('/home', scraperController.home)
router.post('/test', scraperController.test)
router.post('/save-project', scraperController.saveProject)
router.get('/project/:id', scraperController.getProject)
router.get('/projects', scraperController.getProjects)
router.put('/project/:id', scraperController.updateProject)
router.delete('/project/:id', scraperController.deleteProject)
router.post('/upload-image/:id', multipartMiddleware, scraperController.uploadImage)



module.exports = router;
