import * as dotenv from 'dotenv'
dotenv.config()

import fastify from "fastify";
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import homeRoute from "./routes/homeRoute";
import todoRoute from "./routes/todoRoute";

const server = fastify({logger: true}).withTypeProvider<TypeBoxTypeProvider>()

server.register(require('@fastify/formbody') )

server.register(homeRoute, {prefix: "/api/v1"})
server.register(todoRoute, {prefix: "/api/v1/todos"})

server.listen({ port: 3000 }, function (err: any, address: string = '0.0.0.0') {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
  server.log.info(`Server is listening on ${address}`)
})