"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const todoController_1 = require("../controllers/todoController");
const todoSchema_1 = require("../schema/todoSchema");
function todoRoute(fastify) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.get("/", {
            schema: {
                response: {
                    200: todoSchema_1.MultipleTodosResponse
                }
            }
        }, todoController_1.getAllTodosHandler);
        fastify.post("/", {
            schema: {
                body: todoSchema_1.TodoBody,
                response: {
                    201: todoSchema_1.SingleTodoResponse
                }
            }
        }, todoController_1.craeteTodoHandler);
        fastify.get("/:id", {
            schema: {
                params: todoSchema_1.TodoParams,
                response: {
                    200: todoSchema_1.SingleTodoResponse
                }
            }
        }, todoController_1.getSingleTodoHandler);
        fastify.put("/:id", {
            schema: {
                params: todoSchema_1.TodoParams,
                body: todoSchema_1.TodoBody,
                response: {
                    200: todoSchema_1.SingleTodoResponse
                }
            }
        }, todoController_1.updateSingleTodoHandler);
        fastify.delete("/:id", {
            schema: {
                params: todoSchema_1.TodoParams
            }
        }, todoController_1.deleteSingleTodoHandler);
    });
}
exports.default = todoRoute;
