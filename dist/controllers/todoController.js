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
const getAllTodosHandler = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    reply
        .code(200)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({
        status: "success",
        result: 2,
        data: [
            {
                id: 1,
                title: "Berenang renang ke tepian",
                description: "Besok saya mau berenang renang ke tepian",
                isDone: false
            },
            {
                id: 2,
                title: "Mendayung melewati dua tiga pulau",
                description: "Saya ingin melewati dua tiga pulau dengan sekali mendayung",
                isDone: true
            }
        ]
    });
});
exports.getAllTodosHandler = getAllTodosHandler;
const craeteTodoHandler = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    reply
        .code(201)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({
        status: "success",
        data: {
            id: 3,
            title: request.body.title,
            description: request.body.description,
            isDone: request.body.isDone
        }
    });
});
exports.craeteTodoHandler = craeteTodoHandler;
const getSingleTodoHandler = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    if (id === 1) {
        reply
            .code(200)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send({
            status: "success",
            data: {
                id: 1,
                title: "Berenang renang ke tepian",
                description: "Besok saya mau berenang renang ke tepian",
                isDone: false
            }
        });
    }
    else if (id === 2) {
        reply
            .code(200)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send({
            status: "success",
            data: {
                id: 2,
                title: "Mendayung melewati dua tiga pulau",
                description: "Saya ingin melewati dua tiga pulau dengan sekali mendayung",
                isDone: true
            }
        });
    }
});
exports.getSingleTodoHandler = getSingleTodoHandler;
const updateSingleTodoHandler = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    reply
        .code(200)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({
        status: "success",
        data: {
            id: 2,
            title: "Mendayung melewati 2 tiga pulau",
            description: "Saya ingin melewati dua tiga pulau dengan sekali mendayung",
            isDone: false
        }
    });
});
exports.updateSingleTodoHandler = updateSingleTodoHandler;
const deleteSingleTodoHandler = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    reply
        .code(204);
});
exports.deleteSingleTodoHandler = deleteSingleTodoHandler;
