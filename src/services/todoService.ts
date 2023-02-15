import db from "../db/connect"
import { TodoBody } from "../schema/todoSchema"
import { convertStringToSlugFormat } from "../helpers"

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
      slug: convertStringToSlugFormat(body.title!)
    })
    .returningAll()
    .executeTakeFirst()

    return result
}

export async function findTodo(slug: string) {
  const result = await db
  .selectFrom('todo')
  .selectAll()
  .where('slug', '=', slug)
  .executeTakeFirst()

  return result
}

export async function updateTodo(slug: string, body: typeof TodoBody) {
  body.slug = convertStringToSlugFormat(body.title!)
  
  const result = await db 
  .updateTable('todo')
  .set(body)
  .where('slug', '=', slug)
  .returningAll()
  .executeTakeFirst()

  return result
}

export async function deleteTodo(slug: string) {
  const result = await db
    .deleteFrom('todo')
    .where('slug', '=', slug)
    .executeTakeFirst()

  return result
}