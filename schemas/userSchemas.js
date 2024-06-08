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

const updUserInfoSchema = Joi.object({
  name: Joi.string().min(4).max(64),
  email: Joi.string()
    .pattern(emailRegexp)
    .messages({ "string.pattern.base": emailPatternValidateMsg }),
  password: Joi.string().max(64).required(),
})
  .min(2)
  .message("No changes");

const changeThemeSchema = Joi.object({
  theme: Joi.string().valid("light", "dark", "violet").insensitive().required(),
});

export default {
  registerSchema,
  loginSchema,
  updUserInfoSchema,
  changeThemeSchema,
};
