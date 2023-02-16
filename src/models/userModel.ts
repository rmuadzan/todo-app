import { Generated } from "kysely"

interface UserModel {
  id: Generated<string>
  email: string
  password: string
  fullname: string
}

export default UserModel