import { FastifyReply, FastifyRequest } from "fastify"
import { TodoBody, TodoParams } from "../schema/todoSchema"

export const getAllTodosHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  reply 
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({
      status: "success",
      result: 2,
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
}

export const craeteTodoHandler = async (request: FastifyRequest<{Body: typeof TodoBody}>, reply: FastifyReply) => {
  reply
    .code(201)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({
      status: "success",
      data: {
        id: 3,
        title: request.body.title,
        description: request.body.description,
        isDone: request.body.isDone
      }
    })
}

export const getSingleTodoHandler = async (request: FastifyRequest<{Params: typeof TodoParams}>, reply: FastifyReply) => {
  const id = request.params.id

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
}

export const updateSingleTodoHandler = async (request: FastifyRequest<{Body: typeof TodoBody, Params: typeof TodoParams}>, reply: FastifyReply) => {
  const id = request.params.id

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
}

export const deleteSingleTodoHandler = async (request: FastifyRequest<{Params: typeof TodoParams}>, reply: FastifyReply) => {
  const id = request.params.id

  reply
    .code(204)
}