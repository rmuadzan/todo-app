import db from "../db/connect";
import { generateHashedPassword } from "../helpers";

export async function createUser(email: string, password: string, fullname: string) {
  const hashedPassword = await generateHashedPassword(password)
  const result = await db
    .insertInto('person')
    .values({
      email,
      password: hashedPassword,
      fullname
    })
    .returning(['id', 'email', 'fullname'])
    .executeTakeFirst()

    return result
}

export async function getUserInfoByEmail(email: string) {
  const result = await db
    .selectFrom('person')
    .select(['id', 'email', 'password', 'fullname'])
    .where('email', '=', email)
    .executeTakeFirst()

  return result
}