const QuestionariosService = require('./questionarios.services')

const questionariosService = new QuestionariosService()

class QuestionariosControllers {
    /**
     * 
     * @param {import('express').Request} request 
     * @param {import('express').Response} response 
     * @returns 
     */
    async index(request, response) {
        const { carregarPerguntas } = request.query
        const listaQuestionarioss = await questionariosService.list(carregarPerguntas)
        
        return response.json(listaQuestionarioss)
    }
    /**
         * 
         * @param {import('express').Request} request 
         * @param {import('express').Response} response 
         * @returns 
     */
    async create(request, response) {
        const { body } = request

        const Questionarios = await questionariosService.create(body)

        return response.status(201).json(Questionarios)
    }
    /**
         * 
         * @param {import('express').Request} request 
         * @param {import('express').Response} response 
         * @returns 
     */
    async delete(request, response) {
        const { id } = request.params
        
        const apagou = await questionariosService.delete(id)
        
        if(!apagou) {
            return response.status(400).json({ message: "Não foi possivel apagar"})
        }

        return response.status(204).end()
    }
}

module.exports = QuestionariosControllers