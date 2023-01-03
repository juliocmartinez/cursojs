'use strict'
let Scraper = require('../models/scraper')
let controller = {
    home: function (req, res) {
        return res.status(200).send({
            message: 'Soy la Home'
        })
    },
    test: function (req, res) {
        return res.status(200).send({
            message: 'Soy el metodo o accion test del controlador de project'
        })
    },
    saveProject: (req, res) => {
        let scraper = new Scraper()
        let params = req.body;
        scraper.name = params.name
        scraper.price = params.price
        scraper.direction = params.direction
        scraper.image = null
        scraper.features = params.features
        scraper.bedroom = params.bedroom
        scraper.size = params.size
        scraper.bathroom = params.bathroom

        scraper.save((error, projectStore) => {
            if (error) return res.status(500).send({ message: 'Error al guardar' })
            if (!projectStore) return res.status(404).send({ message: 'No se ha podido guardar el registro' })

            return res.status(200).send({ project: projectStore })


        })

    },
    getProject: (req, res) => {
        let projectId = req.params.id
        Scraper.findById(projectId, (error, project) => {
            if (error) return res.status(500).send({ message: 'Error al listar registros' })
            if (!project) return res.status(404).send({ message: 'El registro no existe' })

            return res.status(200).send({ project: project })

        })

    },
    getProjects: (req, res) => {
        Scraper.find({}).exec((error, projects) => {
            if (error) return res.status(500).send({ message: 'Error al listar registros' })
            if (!projects) return res.status(404).send({ message: 'No existen registros' })

            return res.status(200).send({ project: projects })
        })
    },
    updateProject: (req, res) => {
        let projectId = req.params.id
        let update = req.body;
        //Actualizar con el objeto Scraper
        Scraper.findByIdAndUpdate(projectId, update, { new: true }, (error, projectUpdate) => {
            if (error) return res.status(500).send({ message: 'Error al actualizar el registro' })
            if (!projectUpdate) return res.status(404).send({ message: 'El registro para actualizar no existe' })

            return res.status(200).send({ project: projectUpdate })

        })
    },

    deleteProject: (req, res) => {
        let projectId = req.params.id
        Scraper.findByIdAndRemove(projectId, (error, projectRemove) => {
            if (error) return res.status(500).send({ message: 'No se ha podido borrar el registro' })
            if (!projectRemove) return res.status(404).send({ message: 'El registro para borrar no existe' })
            return res.status(200).send({
                project: projectRemove
            })

        })

    },

    uploadImage: (req, res) => {
        let projectId = req.params.id;
        let fileName = 'Imagen no subida...'

        if (req.files) {
            let filePath = req.files.image.path
            let fileSplit = filePath.split('\\')
            let fileName = fileSplit[1]
            //Guardar imagen al registro
            Scraper.findByIdAndUpdate(projectId, { image: fileName }, { new: true }, (error, projectUpdate) => {
                if (error) return res.status(500).send({ message: 'La imagen no se ha subido al registro' })
                if (!projectUpdate) return res.status(404).send({ message: 'El registro para cargar la imagen no existe' })

                return res.status(200).send({ project: projectUpdate })
            })
        } else {
            return res.status(404).send({ message: fileName })

        }
    }
}

module.exports = controller;