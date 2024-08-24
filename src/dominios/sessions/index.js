const { Router } = require('express')
const yup = require('yup')

const SessionsControllers = require('./sessions.controllers')
const { validarSchema } = require('../../middlewares/validacaoRotas')

const sessionsRouter = Router()
const sessionsControllers = new SessionsControllers()

const schemaPostSession = yup.object({
    body: yup.object({
        email: yup.string().email("E-mail informado não é valido").required("Email é obrigatório"),
        senha: yup.string().required("Senha é obrigatória"),
    }),
})

sessionsRouter.post('/', validarSchema(schemaPostSession), sessionsControllers.create)

module.exports = sessionsRouter