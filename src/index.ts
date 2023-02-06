import fastify from "fastify";

const homeRoute = require("./routes/homeRoute")
const todoRoute = require("./routes/todoRoute")

const server = fastify({logger: true})

server.register(require('@fastify/formbody') )

server.register(homeRoute, {prefix: "/api/v1"})
server.register(todoRoute, {prefix: "/api/v1/todos"})

server.listen({ port: 3000 }, function (err: any, address: string) {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address
  server.log.info(`Server is listening on ${address}`)
})