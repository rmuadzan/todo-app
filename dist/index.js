"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const homeRoute = require("./routes/homeRoute");
const todoRoute = require("./routes/todoRoute");
const server = (0, fastify_1.default)({ logger: true });
server.register(require('@fastify/formbody'));
server.register(homeRoute, { prefix: "/api/v1" });
server.register(todoRoute, { prefix: "/api/v1/todos" });
server.listen({ port: 3000 }, function (err, address) {
    if (err) {
        server.log.error(err);
        process.exit(1);
    }
    // Server is now listening on ${address
    server.log.info(`Server is listening on ${address}`);
});
