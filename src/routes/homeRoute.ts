import { FastifyInstance } from "fastify"

async function homeRoute(fastify: FastifyInstance) {
  fastify.get("/", async (request, reply) => {
    return "Hello World"
  })
}

module.exports = homeRoute