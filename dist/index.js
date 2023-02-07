"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const homeRoute_1 = __importDefault(require("./routes/homeRoute"));
const todoRoute_1 = __importDefault(require("./routes/todoRoute"));
const server = (0, fastify_1.default)({ logger: true }).withTypeProvider();
server.register(require('@fastify/formbody'));
server.register(homeRoute_1.default, { prefix: "/api/v1" });
server.register(todoRoute_1.default, { prefix: "/api/v1/todos" });
server.listen({ port: 3000 }, function (err, address) {
    if (err) {
        server.log.error(err);
        process.exit(1);
    }
    server.log.info(`Server is listening on ${address}`);
});
