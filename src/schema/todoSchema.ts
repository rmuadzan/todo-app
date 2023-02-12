import { Type } from '@sinclair/typebox'

export const TodoSchema = Type.Object({
  title: Type.String(),
  description: Type.String(),
  is_done: Type.Boolean(),
  slug: Type.String()
})

export const TodoParams = Type.Object({
  slug: Type.String()
})

export const TodoBody = Type.Object({
  title: Type.String(),
  description: Type.String(),
  is_done: Type.Boolean()
})

export const SingleTodoResponse = Type.Object({
  status: Type.String(),
  data: TodoSchema
})

export const MultipleTodosResponse = Type.Object({
  status: Type.String(),
  result: Type.Number(),
  data: Type.Array(TodoSchema)
})