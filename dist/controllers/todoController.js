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
exports.deleteSingleTodoHandler = exports.updateSingleTodoHandler = exports.getSingleTodoHandler = exports.craeteTodoHandler = exports.getAllTodosHandler = void 0;
const todoService_1 = require("../services/todoService");
const getAllTodosHandler = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, todoService_1.findAllTodos)();
    reply
        .code(200)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({
        status: "success",
        result: result.length,
        data: result
    });
});
exports.getAllTodosHandler = getAllTodosHandler;
const craeteTodoHandler = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, todoService_1.createTodo)(request.body);
    reply
        .code(201)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({
        status: "success",
        data: result
    });
});
exports.craeteTodoHandler = craeteTodoHandler;
const getSingleTodoHandler = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    const result = yield (0, todoService_1.findTodo)(id);
    reply
        .code(200)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({
        status: "success",
        data: result
    });
});
exports.getSingleTodoHandler = getSingleTodoHandler;
const updateSingleTodoHandler = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    const result = yield (0, todoService_1.updateTodo)(id, request.body);
    reply
        .code(200)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({
        status: "success",
        data: result
    });
});
exports.updateSingleTodoHandler = updateSingleTodoHandler;
const deleteSingleTodoHandler = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    (0, todoService_1.deleteTodo)(id);
    reply
        .code(204);
});
exports.deleteSingleTodoHandler = deleteSingleTodoHandler;
