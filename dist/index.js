"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const homeRoute = require("./routes/homeRoute");
const Fastify = (0, fastify_1.default)({ logger: true });
Fastify.register(homeRoute, { prefix: "/api/v1" });
Fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
        Fastify.log.error(err);
    }
    // Server is now listening on ${address
    Fastify.log.info(`Server is listening on ${address}`);
});
