import { Type } from "@sinclair/typebox";

export const UserLoginBody = Type.Object({
  email: Type.String(),
  password: Type.String()
})

export const UserSignUpBody = Type.Object({
  email: Type.String(),
  password: Type.String(),
  fullname: Type.String()
})