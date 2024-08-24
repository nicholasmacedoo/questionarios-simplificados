const { Respostas } = require('../../database/models/respostas')


class RespostasServices {
   
    async create({ conteudo, perguntaId, usuarioId }) {
        const resposta = await Respostas.create({
            conteudo, 
            perguntaId, 
            usuarioId
        })

        return resposta
    }
    
    update() {}

    async delete(id) {
        const questionarioExiste = await Questionarios.findByPk(id)

        if(!questionarioExiste) {
            return false
        }

        await questionarioExiste.destroy()

        return true
    }
}

module.exports = RespostasServices