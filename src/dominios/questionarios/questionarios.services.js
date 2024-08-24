const { Questionarios, Perguntas } = require('../../database/models/questionarios')


class QuestionariosServices {
    async list(carregarPerguntas = false) {
        var questionarios;

        if(carregarPerguntas) {
            questionarios = await Questionarios.scope('carregarPerguntas').findAll()
        } else {
            questionarios = await Questionarios.findAll()
        }

        return questionarios
    }

    async create({ titulo, descricao, perguntas }) {
        const questionario = await Questionarios.create({
            titulo,
            descricao,
            perguntas
        }, {
            include: [
                {
                    model: Perguntas,
                    as: 'perguntas'
                }
            ]
        })

        return questionario
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

module.exports = QuestionariosServices