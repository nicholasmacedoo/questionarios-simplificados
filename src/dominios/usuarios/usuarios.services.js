const usuarioModel = require('../../database/models/usuarios')
const { hash } = require('bcrypt')

class UsuariosServices {
    async list() {
        const usuarios = await usuarioModel.findAll({
            attributes: ['id', 'nome', 'sobrenome', 'email', 'createdAt', 'updatedAt']
        })

        return usuarios
    }

    async createUser({ email, nome, sobrenome, senha }) {
        const usuarioExiste = await usuarioModel.findOne({
            where: {
                email,
            }
        })

        if(usuarioExiste) {
            //throw new Error("Erro no servidor")
            return null
        }

        const senhaCriptografada = await hash(senha, 8)

        const usuario = await usuarioModel.create({
            email, 
            nome, 
            sobrenome, 
            senha: senhaCriptografada
        })

        return usuario
    }
    
    update() {}

    async delete(id) {
        const usuarioExiste = await usuarioModel.findByPk(id)

        if(!usuarioExiste) {
            return false
        }

        await usuarioExiste.destroy()

        return true
    }
}

module.exports = UsuariosServices