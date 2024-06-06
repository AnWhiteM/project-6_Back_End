import Joi from "joi";
import { emailRegexp, emailPatternValidateMsg } from "../helpers/regexps.js";

const registerSchema = Joi.object({
  name: Joi.string().min(4).max(64).required(),
  email: Joi.string()
    .pattern(emailRegexp)
    .messages({ "string.pattern.base": emailPatternValidateMsg })
    .required(),
  password: Joi.string().min(8).max(64).required(),
});

const loginSchema = Joi.object({
  email: Joi.string()
    .pattern(emailRegexp)
    .messages({ "string.pattern.base": emailPatternValidateMsg })
    .required(),
  password: Joi.string().min(8).max(64).required(),
});

// // ❓
// updateSchema = Joi.object({
//   name: Joi.string().min(4).max(64),
//   email: Joi.string()
//     .pattern(emailRegexp)
//     .messages({ "string.pattern.base": emailPatternValidateMsg }),
//   password: Joi.string().min(8).max(64).required(),
// });

export default { registerSchema, loginSchema };
