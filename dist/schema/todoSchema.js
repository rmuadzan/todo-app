"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.Todo = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    title: typebox_1.Type.String(),
    description: typebox_1.Type.String(),
    isDone: typebox_1.Type.Boolean()
});
