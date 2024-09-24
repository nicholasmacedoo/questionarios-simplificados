const { verify } = require('jsonwebtoken')

/**
 * 
 * @param {String} permitirApenas 

 */
function garantirAutenticao(permitirApenas) {
    /** 
     * @param {import('express').Request} request 
     * @param {import('express').Response} response
     * @param {import('express').NextFunction} next  
     */
    return (request, response, next) => {
        const { authorization } = request.headers
    
        if(!authorization) throw new Error('JWT token não encontrado!')
    
        // 'Bearer token' => ['Bearer', 'token']
        // const splitToken = authorization.split(' ')
        const [, token] = authorization.split(' ')
        // const token = splitToken[1]
    
        try {
            const decoded = verify(token, process.env.JWT_SECRET)
    
            const { sub, permissao } = decoded;
            
            if(permitirApenas !== permissao) {
                return response.status(401).message({ message: 'Não autorizado!'})
            }
            // console.log(sub, permissao)
    
            request.user = {
                id: sub,
                permissao,
            }
            next()
        } catch (error) {
            return response.status(401).json({ message: 'Não autorizado!'})
        }
    }
}


module.exports = {
    garantirAutenticao,
}