import slugify from "slugify"

export function convertStringToSlugFormat(data: string): string {
  const slug = slugify(data, {replacement: '-', trim: true, lower: true})

  return slug
}

export class ApiError extends Error {
  private statusCode: number

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}