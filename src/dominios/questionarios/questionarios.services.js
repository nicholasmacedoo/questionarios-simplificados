const { Questionarios, Perguntas } = require('../../database/models/questionarios');
const { Respostas } = require('../../database/models/respostas');
const Usuario = require('../../database/models/usuarios');


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

    async all() {
        /**
         * Eager loading
         */
        const questionarios = await Questionarios.findAll({
            attributes: ['id', 'titulo'],
            include: 
            [
                {
                    model: Perguntas,
                    as: 'perguntas',
                    attributes: ['id', 'descricao'],
                    include: [
                        {
                            model: Respostas,
                            as: 'respostas',
                            attributes: ['id', 'conteudo', 'usuarioId'],
                            include: [
                                {
                                    model: Usuario,
                                    as: 'usuario',
                                    attributes: ['nome']
                                }
                            ]
                        }
                    ]
                }
            ]
            // {
            //     all: true
            // }
        })

         /**
         * Lazy loading
         */

        //  questionarios.getPerguntas
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