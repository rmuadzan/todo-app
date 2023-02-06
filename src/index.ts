import fastify from "fastify";

const homeRoute = require("./routes/homeRoute")

const Fastify = fastify({logger: true})

Fastify.register(homeRoute, {prefix: "/api/v1"})

Fastify.listen({ port: 3000 }, function (err: any, address: string) {
  if (err) {
    Fastify.log.error(err)
  }
  // Server is now listening on ${address
  Fastify.log.info(`Server is listening on ${address}`)
})