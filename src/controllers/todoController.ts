import { FastifyReply, FastifyRequest } from "fastify"
import { TodoBody, TodoParams } from "../schema/todoSchema"
import { createTodo, deleteTodo, findAllTodos, findTodo, updateTodo } from "../services/todoService"

import { ApiError } from "../utils"


export const getAllTodosHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  const result = await findAllTodos(request.user.id)

  if (!result) {
    throw new ApiError(500, "Failed to get todos")
  }

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
  const result = await createTodo(request.user.id, request.body)

  if (!result) {
    throw new ApiError(500, "Failed to create todo")
  }

  reply
    .code(201)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({
      status: "success",
      data: result
    })
}

export const getSingleTodoHandler = async (request: FastifyRequest<{Params: typeof TodoParams}>, reply: FastifyReply) => {
  const slug = request.params.slug

  const result = await findTodo(request.user.id, slug)

  if (!result) {
    throw new ApiError(404, "Todo Not Found")
  }

  reply 
  .code(200)
  .header('Content-Type', 'application/json; charset=utf-8')
  .send({
    status: "success",
    data: result
  })
}

export const updateSingleTodoHandler = async (request: FastifyRequest<{Body: typeof TodoBody, Params: typeof TodoParams}>, reply: FastifyReply) => {
  const slug = request.params.slug

  const result = await updateTodo(request.user.id, slug, request.body)

  if (!result) {
    throw new ApiError(400, "Todo doesn't exist")
  }
  
  reply
  .code(200)
  .header('Content-Type', 'application/json; charset=utf-8')
  .send({
    status: "success",
    data: result
  })
}

export const deleteSingleTodoHandler = async (request: FastifyRequest<{Params: typeof TodoParams}>, reply: FastifyReply) => {
  const slug = request.params.slug

  const deletedRows = (await deleteTodo(request.user.id, slug)).numDeletedRows

  if (Number(deletedRows) === 0) {
    throw new ApiError(400, "Todo doesn't exist")
  }

  reply
    .code(204)
}
