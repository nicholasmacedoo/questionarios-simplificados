const usuarioModel = require('../../database/models/usuarios')
const { compare } = require('bcrypt')
const { sign } = require('jsonwebtoken')

const jwtSecret = "e1ba46759dc1501e9b4cf684df08fa17eabc955d"

class SessionServices {
    async create({ email, senha }) {
        const usuario = await usuarioModel.findOne({
            where: {
                email,
            }
        })
        
        if(!usuario) {
            //throw new Error("Erro no servidor")
            return null
        }

        const senhaCriptografada = await compare(senha, usuario.senha)

        if(!senhaCriptografada) return null 
        
        const token = sign({ permissao: 'criador' }, jwtSecret, {
            subject: usuario.id,
            expiresIn: '1d'
        })

        return {
            usuario,
            token
        }
    }
}

module.exports = SessionServices