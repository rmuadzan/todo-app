import { Static, Type } from '@sinclair/typebox'

export const Todo = Type.Object({
  id: Type.Number(),
  title: Type.String(),
  description: Type.String(),
  isDone: Type.Boolean()
})

export type TodoType = Static<typeof Todo>