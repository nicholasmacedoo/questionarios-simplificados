// CommonJS = require('')
// ESModule = import {} from ''

const http = require("node:http")


/** 
 * GET + /usuarios = BUSCAR UM RECURSO NO BACK END
 * POST + /usuarios = ADICIONAR UM RECURSO (USUARIO) NO BACK-END
 * --- 
 * PUT + /usuarios/[id]:route-params = Atualizar vários do usuario especifico
 * PATCH + /usuarios/[id] = Atualizar um informação especifica
 * DELETE + /usuarios/[id] = REMOVER UM RECURSO ESPECIFICO
 */
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
const server = http.createServer((request, response) => {
    const { method, url } = request

    if(method === 'GET' && url === "/usuarios") {
        response.setHeader('Content-type', "application/json")

        return response.end(JSON.stringify(usuarios)) // early return
    }

    if(method === "POST" && url === "/usuarios") {
        response.statusCode = 401

        return response.end("Sem permissáo")
    }

    return response.end("Hello api")
})
const port = 3333
const hostname = "localhost" 

// http://[hostname]:[port]
server.listen(port, hostname, () => {
    console.log(`Servidor está rodando na porta ${port}: http://${hostname}:${port}`)
})