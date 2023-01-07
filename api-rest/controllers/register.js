'use strict'
const Register = require('../models/register')

let controller = {
    test: (req, res) => {
        return res.status(200).send({
            message: 'Hola soy la test'
        })
    },
    saveProject: (req, res) => {
        let register = new Register()
        let params = req.body
        register.name = params.name
        register.apellido = params.apellido
        register.edad = params.edad
        register.image = null

        register.save((error, projectStore) => {
            if (error) return res.status(500).send({ message: 'Error al guardar el registro' })
            if (!projectStore) return res.status(404).send({ message: 'No se ha podido guardar el registro ' })
            return res.status(200).send({
                project: 'registro guardado'
            })


        })
    },
    getProjects: (req, res) => {
        Register.find({}).exec((error, projects) => {
            return res.status(200).send({
                registers: projects
            })
        })


    },
    getProject: (req, res) => {
        let registerId = req.params.id
        Register.findById(registerId, (error, project) => {
            if(error) return res.status(500).send({message:'Error en la consulta'})
            if(!project) return res.status(404).send({message:'No existe el registro que desea consultar'})
            return res.status(200).send({
                register: project
            })
        })


    }

}


module.exports = controller


