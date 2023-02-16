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
exports.userRoute = void 0;
const helpers_1 = require("../helpers");
function userRoute(fastify) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.post("/login", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = request.body;
            const hashedPassword = yield (0, helpers_1.generateHashedPassword)(password);
            reply.jwtSign({ email, password }, function (err, token) {
                return reply.send(err || { 'accessToken': token });
            });
        }));
        fastify.get('/verify', function (request, reply) {
            request.jwtVerify(function (err, decoded) {
                return reply.send(err || decoded);
            });
        });
    });
}
exports.userRoute = userRoute;
