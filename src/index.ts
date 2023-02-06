import fastify from "fastify";

const Fastify = fastify({logger: true})

Fastify.get("/", async (request, reply) => {
  return "Hello World"
})

Fastify.listen({ port: 3000 }, function (err: any, address: string) {
  if (err) {
    Fastify.log.error(err)
  }
  // Server is now listening on ${address
  Fastify.log.info(`Server is listening on ${address}`)
})