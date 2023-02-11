import db from "../db/connect"
import { TodoBody } from "../schema/todoSchema"

export async function findAllTodos() {
  const result = await db
    .selectFrom('todo')
    .selectAll()
    .orderBy('id')
    .execute()

  return result
}

export async function createTodo(body: typeof TodoBody) {
  const result = db 
    .insertInto('todo')
    .values({
      title: body.title!,
      description: body.description!,
      is_done: body.is_done!,
      slug: 'dsgdfhgjhklkjhgf'
    })
    .returningAll()
    .executeTakeFirst()

    return result
}

export async function findTodo(id: number) {
  const result = await db
  .selectFrom('todo')
  .selectAll()
  .where('id', '=', id)
  .executeTakeFirst()

  return result
}

export async function updateTodo(id: number, body: typeof TodoBody) {
  const result = await db 
  .updateTable('todo')
  .set(body)
  .where('id', '=', id)
  .returningAll()
  .executeTakeFirst()

  return result
}

export async function deleteTodo(id: number) {
  await db
    .deleteFrom('todo')
    .where('id', '=', id)
    .execute()
}