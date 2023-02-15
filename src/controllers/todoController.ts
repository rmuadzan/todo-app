import { FastifyReply, FastifyRequest } from "fastify"
import { TodoBody, TodoParams } from "../schema/todoSchema"
import { createTodo, deleteTodo, findAllTodos, findTodo, updateTodo } from "../services/todoService"
import { ApiError } from "../helpers"

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

  if (!result) {
    throw new ApiError(404, "Failed to create Todo")
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

  const result = await findTodo(slug)

  if (!result) {
    throw new ApiError(404, "Todo doesnt exist")
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

  const result = await updateTodo(slug, request.body)

  if (!result) {
    throw new ApiError(404, "Todo doesnt exist")
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

  const result = await deleteTodo(slug)
  if (Number(result.numDeletedRows) === 0) {
    throw new ApiError(404, "Todo doesnt exist")
  }

  reply
    .code(204)
}