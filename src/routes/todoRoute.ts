import { FastifyInstance } from "fastify";  
import { TodoType } from "../schema/todoSchema";
import { IParams, IReplySingleTodo, IReplyMultipleTodo } from "../interfaces";
import { getAllTodosHandler, craeteTodoHandler, getSingleTodoHandler, updateSingleTodoHandler, deleteSingleTodoHandler } from "../controllers/todoController";

async function todoRoute(fastify: FastifyInstance) {
  fastify.get("/", getAllTodosHandler)

  fastify.post("/", craeteTodoHandler)

  fastify.get("/:id", getSingleTodoHandler)

  fastify.put("/:id", updateSingleTodoHandler)

  fastify.delete("/:id", deleteSingleTodoHandler)
}

export default todoRoute