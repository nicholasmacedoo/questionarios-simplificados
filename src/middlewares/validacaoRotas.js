/**
 *  
 * @param {import('yup').ObjectSchema} schema 
 * @returns {import('express').RequestHandler}
 */
function validarSchema(schema) {
    return async (request, response, next) => {
        try {
            await schema.validate({
                body: request.body,
                query: request.query,
                params: request.params,
            })

            next()
        } catch (error) {
            return response.status(400).json({ type: error.name, message: error.message })
        }
    }
}

module.exports = { 
    validarSchema
}