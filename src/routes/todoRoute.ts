import { FastifyInstance } from "fastify";  
import { getAllTodosHandler, craeteTodoHandler, getSingleTodoHandler, updateSingleTodoHandler, deleteSingleTodoHandler } from "../controllers/todoController";
import { MultipleTodosResponse, SingleTodoResponse, TodoBody, TodoParams } from "../schema/todoSchema";

async function todoRoute(fastify: FastifyInstance) {
  fastify.get("/", {
    schema: {
      response: {
        200: MultipleTodosResponse
      }
    }
  } ,getAllTodosHandler)

  fastify.post("/", {
    schema: {
      body: TodoBody,
      response: {
        201: SingleTodoResponse
      }
    }
  }, craeteTodoHandler)

  fastify.get("/:id", {
    schema: {
      params: TodoParams,
      response: {
        200: SingleTodoResponse
      }
    }
  } , getSingleTodoHandler)

  fastify.put("/:id", {
    schema: {
      params: TodoParams,
      body: TodoBody,
      response: {
        200: SingleTodoResponse
      }
    }
  } , updateSingleTodoHandler)

  fastify.delete("/:id",{
    schema: {
      params: TodoParams
    }
  }, deleteSingleTodoHandler)
}

export default todoRoute