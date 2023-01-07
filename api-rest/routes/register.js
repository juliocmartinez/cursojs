let express = require('express')
let registerController = require('../controllers/register')
let router = express.Router()
//Rutas

router.get('/test', registerController.test)
router.post('/save-project', registerController.saveProject)
router.get('/projects', registerController.getProjects)
router.get('/project/:id', registerController.getProject)

module.exports = router