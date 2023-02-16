import { Pool } from "pg"
import { Kysely, PostgresDialect } from "kysely";
import TodoModel from "../models/todoModel";
import UserModel from "../models/userModel";

interface Database {
  todo: TodoModel
  person: UserModel
}

const db = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool: new Pool({
      host: process.env.PG_HOST,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      port: parseInt(process.env.PG_PORT!),
      database: process.env.PG_DATABASE
    })
  })
})

export default db