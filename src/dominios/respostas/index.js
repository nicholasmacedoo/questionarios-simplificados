const { Router } = require('express')
// const yup = require('yup')

const RespostasControllers = require('./respostas.controllers')
// const { validarSchema } = require('../../middlewares/validacaoRotas')
const { garantirAutenticao } = require('../../middlewares/auth')

const respostasRouter = Router()
const respostasControllers = new RespostasControllers()

const garantirAutenticacaoEstudante = garantirAutenticao('estudante')

respostasRouter.use(garantirAutenticacaoEstudante)
respostasRouter.post('/:perguntaId', respostasControllers.create)

module.exports = respostasRouter