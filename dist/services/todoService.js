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
exports.deleteTodo = exports.updateTodo = exports.findTodo = exports.createTodo = exports.findAllTodos = void 0;
const connect_1 = __importDefault(require("../db/connect"));
function findAllTodos() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield connect_1.default
            .selectFrom('todo')
            .selectAll()
            .orderBy('id')
            .execute();
        return result;
    });
}
exports.findAllTodos = findAllTodos;
function createTodo(body) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = connect_1.default
            .insertInto('todo')
            .values({
            title: body.title,
            description: body.description,
            is_done: body.is_done,
            slug: 'dsgdfhgjhklkjhgf'
        })
            .returningAll()
            .executeTakeFirst();
        return result;
    });
}
exports.createTodo = createTodo;
function findTodo(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield connect_1.default
            .selectFrom('todo')
            .selectAll()
            .where('id', '=', id)
            .executeTakeFirst();
        return result;
    });
}
exports.findTodo = findTodo;
function updateTodo(id, body) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield connect_1.default
            .updateTable('todo')
            .set(body)
            .where('id', '=', id)
            .returningAll()
            .executeTakeFirst();
        return result;
    });
}
exports.updateTodo = updateTodo;
function deleteTodo(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield connect_1.default
            .deleteFrom('todo')
            .where('id', '=', id)
            .execute();
    });
}
exports.deleteTodo = deleteTodo;
