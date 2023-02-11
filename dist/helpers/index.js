"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertStringToSlugFormat = void 0;
const slugify_1 = __importDefault(require("slugify"));
function convertStringToSlugFormat(data) {
    const slug = (0, slugify_1.default)(data, { replacement: '-', trim: true, lower: true });
    return slug;
}
exports.convertStringToSlugFormat = convertStringToSlugFormat;
