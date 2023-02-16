"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSignUpBody = exports.UserLoginBody = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.UserLoginBody = typebox_1.Type.Object({
    email: typebox_1.Type.String(),
    password: typebox_1.Type.String()
});
exports.UserSignUpBody = typebox_1.Type.Object({
    email: typebox_1.Type.String(),
    password: typebox_1.Type.String(),
    fullname: typebox_1.Type.String()
});
