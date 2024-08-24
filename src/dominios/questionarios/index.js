const { Router } = require('express')
const yup = require('yup')

const QuestionariosControllers = require('./questionarios.controllers')
const { validarSchema } = require('../../middlewares/validacaoRotas')
const { garantirAutenticacao, garantirAutenticacaoRBAC } = require('../../middlewares/garantirAutenticacao')

const questionariosRouter = Router()
const questionariosControllers = new QuestionariosControllers()

const schemaPostQuestionario = yup.object({
    body: yup.object({
        titulo: yup.string().required("Titulo é obrigatório"),
        descricao: yup.string().required("Descrição é obrigatório"),
        perguntas: yup.array(
            yup.object({
                descricao: yup.string().required("Descrição da pergunta pergunta é obrigatória")
            })
        )
    }),
})
const schemaDeleteQuestionario = yup.object({
    params: yup.object({
        id: yup.string().uuid("Id informado não é valido!").required("Id é obrigatório")
        
    }),
})

questionariosRouter.use(garantirAutenticacaoRBAC('criador'))

questionariosRouter.get('/', questionariosControllers.index)

questionariosRouter.post('/', validarSchema(schemaPostQuestionario), questionariosControllers.create)

questionariosRouter
.delete(
    '/:id', 
    validarSchema(schemaDeleteQuestionario), 
    questionariosControllers.delete
)

module.exports = questionariosRouter