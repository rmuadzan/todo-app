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
const helpers_1 = require("../helpers");
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
    if (!result) {
        throw new helpers_1.ApiError(404, "Failed to create Todo");
    }
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
    const slug = request.params.slug;
    const result = yield (0, todoService_1.findTodo)(slug);
    if (!result) {
        throw new helpers_1.ApiError(404, "Todo doesnt exist");
    }
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
    const slug = request.params.slug;
    const result = yield (0, todoService_1.updateTodo)(slug, request.body);
    if (!result) {
        throw new helpers_1.ApiError(404, "Todo doesnt exist");
    }
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
    const slug = request.params.slug;
    const result = yield (0, todoService_1.deleteTodo)(slug);
    if (Number(result.numDeletedRows) === 0) {
        console.log("OK");
    }
    reply
        .code(204);
});
exports.deleteSingleTodoHandler = deleteSingleTodoHandler;
