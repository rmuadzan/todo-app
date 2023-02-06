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
function todoRoute(fastify) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.get("/", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            reply
                .code(200)
                .header('Content-Type', 'application/json; charset=utf-8')
                .send({
                status: "success",
                results: 2,
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
        }));
        fastify.post("/", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            reply
                .code(201)
                .header('Content-Type', 'application/json; charset=utf-8')
                .send({
                id: 3,
                title: request.body.title,
                description: request.body.description,
                isDone: request.body.isDone
            });
        }));
        fastify.get("/:id", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(request.params.id);
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
        }));
        fastify.put("/:id", (request, reply) => __awaiter(this, void 0, void 0, function* () {
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
        }));
        fastify.delete("/:id", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            reply
                .code(204);
        }));
    });
}
module.exports = todoRoute;
