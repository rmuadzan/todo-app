import slugify from "slugify"
import bcrypt from "bcrypt"

export function convertStringToSlugFormat(data: string): string {
  const slug = slugify(data, {replacement: '-', trim: true, lower: true})

  return slug
}

export async function generateHashedPassword(password: string) {
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  return hashedPassword
}

export async function comparePassword(candidatePassword: string, actualPassword: string): Promise<boolean> {
  const match = await bcrypt.compare(candidatePassword, actualPassword)

  return match
}