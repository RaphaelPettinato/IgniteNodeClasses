import http from 'node:http'


const users = []

const server = http.createServer((request, response) => {
  const { method, url } = request

  if (method === "GET" && url === "/users"){
    return response
    .setHeader('Content-type', 'application/json')
    .end(JSON.stringify(users))
    .writeHead(200)
  }

  if (method === "POST" && url === "/users"){
    users.push({
      id: 1,
      name: "Raphael",
      email: "Raphael@petinatto.com"
    })

    return response.writeHead(201).end("Criação de usuário feita")
  }


  return response.writeHead(404).end("Not found")
})

server.listen(3333)