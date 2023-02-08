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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSingleTodoHandler = exports.updateSingleTodoHandler = exports.getSingleTodoHandler = exports.craeteTodoHandler = exports.getAllTodosHandler = void 0;
const connect_1 = __importDefault(require("../db/connect"));
const getAllTodosHandler = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield connect_1.default
        .selectFrom('todo')
        .selectAll()
        .orderBy('id')
        .execute();
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
    const result = yield connect_1.default
        .insertInto('todo')
        .values({
        title: request.body.title,
        description: request.body.description,
        is_done: request.body.is_done,
        slug: 'gfsdfbvddfvdb'
    })
        .returningAll()
        .executeTakeFirst();
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
    const result = yield connect_1.default
        .selectFrom('todo')
        .selectAll()
        .where('id', '=', id)
        .executeTakeFirst();
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
    console.log(id);
    const result = yield connect_1.default
        .updateTable('todo')
        .set(request.body)
        .where('id', '=', id)
        .returningAll()
        .executeTakeFirst();
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
    yield connect_1.default
        .deleteFrom('todo')
        .where('id', '=', id)
        .execute();
    reply
        .code(204);
});
exports.deleteSingleTodoHandler = deleteSingleTodoHandler;
