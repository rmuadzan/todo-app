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
exports.comparePassword = exports.generateHashedPassword = exports.convertStringToSlugFormat = void 0;
const slugify_1 = __importDefault(require("slugify"));
const bcrypt_1 = __importDefault(require("bcrypt"));
function convertStringToSlugFormat(data) {
    const slug = (0, slugify_1.default)(data, { replacement: '-', trim: true, lower: true });
    return slug;
}
exports.convertStringToSlugFormat = convertStringToSlugFormat;
function generateHashedPassword(password) {
    return __awaiter(this, void 0, void 0, function* () {
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashedPassword = yield bcrypt_1.default.hash(password, salt);
        return hashedPassword;
    });
}
exports.generateHashedPassword = generateHashedPassword;
function comparePassword(candidatePassword, actualPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        const match = yield bcrypt_1.default.compare(candidatePassword, actualPassword);
        return match;
    });
}
exports.comparePassword = comparePassword;
