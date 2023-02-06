import { FastifyInstance, FastifyRequest } from "fastify";  

interface IParams {
  id: string
}

interface IBody {
  title: string, 
  description: string,
  isDone: boolean
}

async function todoRoute(fastify: FastifyInstance) {
  fastify.get("/", async (request, reply) => {
    reply 
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({
        status: "success",
        results: 2,
        data: [
          {
          id: 1,
          title: "Berenang renang ke tepian",
          description: "Besok saya mau berenang renang ke tepian",
          isDone: false
        },
        {
          id: 2,
          title: "Mendayung melewati dua tiga pulau",
          description: "Saya ingin melewati dua tiga pulau dengan sekali mendayung",
          isDone: true
        }
        ]
      })
  })

  fastify.post<{
    Body: IBody
  }>("/",async (request, reply) => {
    reply
      .code(201)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({
        id: 3,
        title: request.body.title,
        description: request.body.description,
        isDone: request.body.isDone
      })
  })

  fastify.get<{
    Params: IParams
  }>("/:id", async (request, reply) => {
    const id = parseInt(request.params.id)

    if (id === 1) {
      reply 
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({
        status: "success",
        data: {
          id: 1,
          title: "Berenang renang ke tepian",
          description: "Besok saya mau berenang renang ke tepian",
          isDone: false
        }
      })
    } else if (id === 2) {
      reply 
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({
        status: "success",
        data: {
          id: 2,
          title: "Mendayung melewati dua tiga pulau",
          description: "Saya ingin melewati dua tiga pulau dengan sekali mendayung",
          isDone: true
        }
      })
    }
  })

  fastify.put<{
    Params: IParams,
    Body: IBody
  }>("/:id",async (request, reply) => {
    reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({
      status: "success",
      data: {
        id: 2,
        title: "Mendayung melewati 2 tiga pulau",
        description: "Saya ingin melewati dua tiga pulau dengan sekali mendayung",
        isDone: false
      }
    })
  })

  fastify.delete<{
    Params: IParams
  }>("/:id",async (request, reply) => {
    reply
      .code(204)
  })
}

module.exports = todoRoute