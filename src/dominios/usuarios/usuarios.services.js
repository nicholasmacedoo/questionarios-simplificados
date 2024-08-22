const { v4: uuid } = require('uuid')

var usuarios = [
    {
        id: 1,
        nome: "Aurora",
        sobrenome: "Lobo",
        email: 'aurora@lab365.com.br',
        senha: "dnjsan$$23",
        createdAt: '2024-08-20'   
    },
    {
        id: 2,
        nome: "Amora",
        sobrenome: "Lobo",
        email: 'amora@lab365.com.br',
        senha: "dnjsan$$23",
        createdAt: '2024-08-20'   
    }
] 
// DATA TRASNFER OBJECT = DTO

class UsuariosServices {
    list() {
        return usuarios
    }

    createUser(usuarioDTO) {
        const usuarioExiste = usuarios.find(usuario => usuario.email === usuarioDTO.email)

        if(usuarioExiste) {
            //throw new Error("Erro no servidor")
            return null
        }

        const novoUsuario = {
            id: uuid(),
            nome: usuarioDTO.nome,
            sobrenome: usuarioDTO.sobrenome,
            email: usuarioDTO.email,
            createdAt: new Date().toLocaleDateString(),
        }

        usuarios.push(novoUsuario)

        return novoUsuario
    }
    
    update() {}

    delete(id) {
        const usuarioExiste = usuarios.find(usuario => usuario.id === id)

        if(!usuarioExiste) {
            return false
        }

        return true
    }
}

module.exports = UsuariosServices