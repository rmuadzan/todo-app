import slugify from "slugify"

export function convertStringToSlugFormat(data: string): string {
  const slug = slugify(data, {replacement: '-', trim: true, lower: true})

  return slug
}