import db from "../db/connect"
import { TodoBody } from "../schema/todoSchema"
import { convertStringToSlugFormat } from "../helpers"

export async function findAllTodos(person_id: string) {
  const result = await db
    .selectFrom('todo')
    .selectAll()
    .where('person_id', '=', person_id)
    .orderBy('id')
    .execute()

  return result
}

export async function createTodo(person_id: string, body: typeof TodoBody) {
  const result = db 
    .insertInto('todo')
    .values({
      title: body.title!,
      description: body.description!,
      is_done: body.is_done!,
      slug: convertStringToSlugFormat(body.title!),
      person_id: person_id
    })
    .returningAll()
    .executeTakeFirst()

    return result
}

export async function findTodo(person_id: string, slug: string) {
  const result = await db
  .selectFrom('todo')
  .selectAll()
  .where('person_id', '=', person_id)
  .where('slug', '=', slug)
  .executeTakeFirst()

  return result
}

export async function updateTodo(person_id: string, slug: string, body: typeof TodoBody) {
  body.slug = convertStringToSlugFormat(body.title!)
  
  const result = await db 
  .updateTable('todo')
  .set(body)
  .where('person_id', '=', person_id)
  .where('slug', '=', slug)
  .returningAll()
  .executeTakeFirst()

  return result
}

export async function deleteTodo(person_id: string, slug: string) {
  const result = await db
    .deleteFrom('todo')
    .where('person_id', '=', person_id)
    .where('slug', '=', slug)
    .executeTakeFirst()

  return result
}