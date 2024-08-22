const UsuarioService = require('./usuarios.services')

const usuarioService = new UsuarioService()

class UsuariosControllers {
    index(request, response) {
        const listaUsuarios = usuarioService.list()

        return response.json(listaUsuarios)
    }

    create(request, response) {
        const { body } = request

        const usuario = usuarioService.createUser(body)

        return response.status(201).json(usuario)
    }

    delete(request, response) {
        const { id } = request.params
        
        const apagou = usuarioService.delete(id)
        

        if(!apagou) {
            return response.status(400).json({ message: "Não foi possivel apagar"})
        }

        return response.status(204).end()
    }
}

module.exports = UsuariosControllers