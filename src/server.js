const express = require('express')
const UsuariosControllers = require('./dominios/usuarios/usuarios.controllers')


const app = express()
/** Config */
app.use(express.json()) // middleware => interceptador

const usuariosControllers = new UsuariosControllers()

/** 
 * RESPONSAVEL APENAS POR CRIAR AS ROTAS E O SERVIDOR
 */
/** ROTAS USUÁRIOS */
app.get('/usuarios', usuariosControllers.index)
app.post('/usuarios', usuariosControllers.create)
app.delete('/usuarios/:id', usuariosControllers.delete)

// HTTP METHOD = GET + URL => ALGUM RECRUSO 

/** criar usuario */


app.listen(3333, () => {
    console.log("Servidor rodando na porta 3333")
})