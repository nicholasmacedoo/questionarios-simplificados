require('dotenv').config()
// const { config } = require('dotenv')
// config()
const database = require('./database/config')

const express = require('express')
const UsuariosControllers = require('./dominios/usuarios/usuarios.controllers')
const QuestionariosControllers = require('./dominios/questionarios/questionarios.controllers')


const app = express()
/** Config */
app.use(express.json()) // middleware => interceptador

const usuariosControllers = new UsuariosControllers()
const questionariosControllers = new QuestionariosControllers()
/** 
 * RESPONSAVEL APENAS POR CRIAR AS ROTAS E O SERVIDOR
 */
/** ROTAS USUÁRIOS */
app.get('/usuarios', usuariosControllers.index)
app.post('/usuarios', usuariosControllers.create)
app.delete('/usuarios/:id', usuariosControllers.delete)
/** ROTAS DE QUESTIONARIOS */
app.get('/questionarios', questionariosControllers.index)
app.post('/questionarios', questionariosControllers.create)
app.delete('/questionarios/:id', questionariosControllers.delete)

/** ROTAS DE RESPOSTAS */
// app.get('/questionarios', questionariosControllers.index)
// app.post('/questionarios', questionariosControllers.create)
// app.delete('/questionarios/:id', questionariosControllers.delete)

// HTTP METHOD = GET + URL => ALGUM RECRUSO 

/** criar usuario */

async function iniciarServidor() {

    await database.authenticate()
    console.log("Banco de dados foi incializado com sucesso!")

    app.listen(3333, () => {

        console.log("Servidor rodando na porta 3333")
    })
}

iniciarServidor()