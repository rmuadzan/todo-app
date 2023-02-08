import { Static, Type } from '@sinclair/typebox'

export const TodoParams = Type.Object({
  id: Type.Number()
})

export const TodoBody = Type.Object({
  title: Type.String(),
  description: Type.String(),
  is_done: Type.Boolean()
})

export const SingleTodoResponse = Type.Object({
  status: Type.String(),
  data: Type.Object({
    id: Type.Number(),
    title: Type.String(),
    description: Type.String(),
    is_done: Type.Boolean()
  })
})

export const MultipleTodosResponse = Type.Object({
  status: Type.String(),
  result: Type.Number(),
  data: Type.Array(Type.Object({
    id: Type.Number(),
    title: Type.String(),
    description: Type.String(),
    is_done: Type.Boolean()
  }))
})