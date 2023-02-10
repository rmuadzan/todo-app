import { FastifyReply, FastifyRequest } from "fastify"
import { TodoBody, TodoParams } from "../schema/todoSchema"
import db from "../db/connect"

export const getAllTodosHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  const result = await db
    .selectFrom('todo')
    .selectAll()
    .orderBy('id')
    .execute()

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
  const result = await db 
    .insertInto('todo')
    .values({
      title: request.body.title!,
      description: request.body.description!,
      is_done: request.body.is_done!,
      slug: 'gfsdfbvddfvdb'
    })
    .returningAll()
    .executeTakeFirst()

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

  const result = await db
    .selectFrom('todo')
    .selectAll()
    .where('id', '=', id)
    .executeTakeFirst()

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
  console.log(id)

  const result = await db 
    .updateTable('todo')
    .set(request.body)
    .where('id', '=', id)
    .returningAll()
    .executeTakeFirst()

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

  await db
    .deleteFrom('todo')
    .where('id', '=', id)
    .execute()

  reply
    .code(204)
}