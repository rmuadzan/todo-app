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
const userService_1 = require("../services/userService");
const helpers_1 = require("../helpers");
function homeRoute(fastify) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.get("/", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return "Hello World";
        }));
        fastify.post("/login", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = request.body;
            const user = yield (0, userService_1.getUserInfoByEmail)(email);
            if (!user) {
                throw new Error("Invalid email");
            }
            const isMatch = yield (0, helpers_1.comparePassword)(password, user.password);
            if (!isMatch) {
                throw new Error("Invalid password");
            }
            reply.code(200).send("Logged in");
        }));
        fastify.post("/signup", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            const { email, password, fullname } = request.body;
            const user = yield (0, userService_1.createUser)(email, password, fullname);
            if (!user) {
                throw new Error("Failed to create user");
            }
            reply.code(201).send("Signed in");
        }));
    });
}
exports.default = homeRoute;
