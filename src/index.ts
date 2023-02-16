import * as dotenv from 'dotenv'
dotenv.config()

import fastify from "fastify";
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import jwt from "@fastify/jwt"
import homeRoute from "./routes/homeRoute";
import todoRoute from "./routes/todoRoute";

declare module "@fastify/jwt" {
  interface FastifyJWT {
    payload: { id: string, email: string, fullname: string }
  }
}

const server = fastify({logger: true}).withTypeProvider<TypeBoxTypeProvider>()

server.register(jwt, {
  secret: 'THIS IS SUPER SECRET KEY'
})
server.register(require('@fastify/formbody'))

server.register(homeRoute, {prefix: "/api/v1"})
server.register(todoRoute, {prefix: "/api/v1/todos"})

server.listen({ port: 3000 }, function (err: any, address: string = '0.0.0.0') {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
  server.log.info(`Server is listening on ${address}`)
})