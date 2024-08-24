const SessionsService = require('./sessions.services')

const sessionsService = new SessionsService()

class SessionsControllers {
    /**
         * 
         * @param {import('express').Request} request 
         * @param {import('express').Response} response 
         * @returns 
     */
    async create(request, response) {
        const { body } = request

        const session = await sessionsService.create(body)

        if(!session) return response.status(400).json({ message: "Email/Senha inválida"}) 

        return response.json(session)
    }
}

module.exports = SessionsControllers