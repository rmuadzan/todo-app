import { Generated } from "kysely"

interface TodoModel {
  id: Generated<number>
  title: string
  description: string
  is_done: boolean
  slug: string
  person_id: string
}

export default TodoModel