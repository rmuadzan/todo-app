import { FastifyReply, FastifyRequest } from "fastify"
import { TodoBody, TodoParams } from "../schema/todoSchema"
import db from "../db/connect"
import { createTodo, deleteTodo, findAllTodos, findTodo, updateTodo } from "../services/todoService"

export const getAllTodosHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  const result = await findAllTodos()

  reply 
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({
      status: "success",
      result: result.length,
      data: result
    })
}

export const craeteTodoHandler = async (request: FastifyRequest<{Body: typeof TodoBody}>, reply: FastifyReply) => {
  const result = await createTodo(request.body)

  reply
    .code(201)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({
      status: "success",
      data: result
    })
}

export const getSingleTodoHandler = async (request: FastifyRequest<{Params: typeof TodoParams}>, reply: FastifyReply) => {
  const id = request.params.id

  const result = await findTodo(id)

  reply 
  .code(200)
  .header('Content-Type', 'application/json; charset=utf-8')
  .send({
    status: "success",
    data: result
  })
}

export const updateSingleTodoHandler = async (request: FastifyRequest<{Body: typeof TodoBody, Params: typeof TodoParams}>, reply: FastifyReply) => {
  const id = request.params.id

  const result = await updateTodo(id, request.body)

  reply
  .code(200)
  .header('Content-Type', 'application/json; charset=utf-8')
  .send({
    status: "success",
    data: result
  })
}

export const deleteSingleTodoHandler = async (request: FastifyRequest<{Params: typeof TodoParams}>, reply: FastifyReply) => {
  const id = request.params.id

  deleteTodo(id)

  reply
    .code(204)
}