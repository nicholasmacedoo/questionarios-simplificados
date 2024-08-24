const RespostasService = require('./respostas.services')

const respostasService = new RespostasService()

class RespostaControllers {

    /**
         * 
         * @param {import('express').Request} request 
         * @param {import('express').Response} response 
         * @returns 
     */
    async create(request, response) {
        const { body } = request
        const { perguntaId } = request.params
        const { id } = request.usuario

        const Questionarios = await respostasService.create({
            ...body,
            perguntaId,
            usuarioId: id
        })

        return response.status(201).json(Questionarios)
    }
    
}

module.exports = RespostaControllers