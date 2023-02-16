import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import { UserLoginBody, UserSignUpBody } from "../schema/userSchema"
import { createUser, getUserInfoByEmail } from "../services/userService"
import { comparePassword } from "../helpers"

async function homeRoute(fastify: FastifyInstance) {
  fastify.get("/", async (request, reply) => {
    return "Hello World"
  })

  fastify.post("/login", async (request: FastifyRequest<{Body: typeof UserLoginBody}>, reply: FastifyReply) => {
    const {email, password} = request.body

    const user = await getUserInfoByEmail(email)
    if (!user) {
      throw new Error("Invalid email")
    }

    const isMatch = await comparePassword(password, user.password)
    if (!isMatch) {
      throw new Error("Invalid password")
    }

    reply.jwtSign({id: user.id, email: user.email, fullname: user.fullname}, function (err: any, token: string) {
      return reply.send(err || { 'accessToken': token })
    })
  })

  fastify.post("/signup",async (request: FastifyRequest<{Body: typeof UserSignUpBody}>, reply: FastifyReply) => {
    const {email, password, fullname} = request.body

    const user = await createUser(email, password, fullname)
    if (!user) {
      throw new Error("Failed to create user")
    }

    reply.jwtSign({id: user.id, email, fullname}, function (err: any, token: string) {
      return reply.send(err || { 'accessToken': token })
    })
  })
}

export default homeRoute