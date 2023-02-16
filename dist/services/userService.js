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
exports.getUserInfoByEmail = exports.getUserPasswordByEmail = exports.createUser = void 0;
const connect_1 = __importDefault(require("../db/connect"));
const helpers_1 = require("../helpers");
function createUser(email, password, fullname) {
    return __awaiter(this, void 0, void 0, function* () {
        const hashedPassword = yield (0, helpers_1.generateHashedPassword)(password);
        const result = yield connect_1.default
            .insertInto('person')
            .values({
            email,
            password: hashedPassword,
            fullname
        })
            .returning(['email', 'fullname'])
            .executeTakeFirst();
        return result;
    });
}
exports.createUser = createUser;
function getUserPasswordByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield connect_1.default
            .selectFrom('person')
            .select(['password'])
            .where('email', '=', email)
            .executeTakeFirst();
        return result;
    });
}
exports.getUserPasswordByEmail = getUserPasswordByEmail;
function getUserInfoByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield connect_1.default
            .selectFrom('person')
            .select(['email', 'password', 'fullname'])
            .where('email', '=', email)
            .executeTakeFirst();
        return result;
    });
}
exports.getUserInfoByEmail = getUserInfoByEmail;
