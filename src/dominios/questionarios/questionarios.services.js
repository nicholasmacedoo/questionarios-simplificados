const questionariosModel = require('../../database/models/questionarios')


class QuestionariosServices {
    async list() {
        const questionarios = await questionariosModel.findAll()

        return questionarios
    }

    async create({ titulo, descricao }) {
        const questionario = await questionariosModel.create({
            titulo,
            descricao
        })

        return questionario
    }
    
    update() {}

    async delete(id) {
        const questionarioExiste = await questionariosModel.findByPk(id)

        if(!questionarioExiste) {
            return false
        }

        await questionarioExiste.destroy()

        return true
    }
}

module.exports = QuestionariosServices