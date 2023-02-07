import { Type } from "@sinclair/typebox";
import { TodoType } from "../schema/todoSchema";
import { FastifyRequest } from "fastify";

export interface IParams {
  id: string
}

export interface IUserRequest {
  Body: TodoType
  Params: IParams
}

export interface IReplySingleTodo {
  status: string,
  data: TodoType
}

export interface IReplyMultipleTodo {
  status: string,
  results: number,
  data: TodoType[]
}
