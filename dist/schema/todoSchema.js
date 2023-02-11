"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultipleTodosResponse = exports.SingleTodoResponse = exports.TodoBody = exports.TodoParams = exports.TodoSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.TodoSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    title: typebox_1.Type.String(),
    description: typebox_1.Type.String(),
    is_done: typebox_1.Type.Boolean(),
    slug: typebox_1.Type.String()
});
exports.TodoParams = typebox_1.Type.Object({
    id: typebox_1.Type.Number()
});
exports.TodoBody = typebox_1.Type.Object({
    title: typebox_1.Type.String(),
    description: typebox_1.Type.String(),
    is_done: typebox_1.Type.Boolean()
});
exports.SingleTodoResponse = typebox_1.Type.Object({
    status: typebox_1.Type.String(),
    data: typebox_1.Type.Object({
        id: typebox_1.Type.Number(),
        title: typebox_1.Type.String(),
        description: typebox_1.Type.String(),
        is_done: typebox_1.Type.Boolean()
    })
});
exports.MultipleTodosResponse = typebox_1.Type.Object({
    status: typebox_1.Type.String(),
    result: typebox_1.Type.Number(),
    data: typebox_1.Type.Array(typebox_1.Type.Object({
        id: typebox_1.Type.Number(),
        title: typebox_1.Type.String(),
        description: typebox_1.Type.String(),
        is_done: typebox_1.Type.Boolean()
    }))
});
