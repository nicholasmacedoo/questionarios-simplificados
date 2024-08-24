const { Router } = require('express')
const yup = require('yup')

const UsuariosControllers = require('./usuarios.controllers')
const { validarSchema } = require('../../middlewares/validacaoRotas')
const usuarioRouter = Router()
const usuariosControllers = new UsuariosControllers()

const schemaPostUsuario = yup.object({
    body: yup.object({
        nome: yup.string().required("Nome é obrigatório"),
        sobrenome: yup.string(),
        email: yup.string().email("E-mail informado não é valido").required("Email é obrigatório"),
        senha: yup.string().min(3, "Minimo de 3 caracteres").max(16, "Maximo de 16 caracteres").required("Senha é obrigatória"),
    }),
})

usuarioRouter.get('/', usuariosControllers.index)

usuarioRouter.post('/', validarSchema(schemaPostUsuario), usuariosControllers.create)

usuarioRouter.delete('/:id', usuariosControllers.delete)


module.exports = usuarioRouter