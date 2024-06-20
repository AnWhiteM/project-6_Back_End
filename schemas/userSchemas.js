import Joi from "joi";
import { emailRegexp, emailPatternValidateMsg } from "../helpers/regexps.js";

export const registerSchema = Joi.object({
  name: Joi.string().min(2).max(64).required(),
  email: Joi.string()
    .pattern(emailRegexp)
    .messages({ "string.pattern.base": emailPatternValidateMsg })
    .required(),
  password: Joi.string().min(8).max(64).required(),
});

export const loginSchema = Joi.object({
  email: Joi.string()
    .pattern(emailRegexp)
    .messages({ "string.pattern.base": emailPatternValidateMsg })
    .required(),
  password: Joi.string().min(8).max(64).required(),
});

export const changeCurrentSchema = Joi.object({
  name: Joi.string().min(2).max(64),
  email: Joi.string()
    .pattern(emailRegexp)
    .messages({ "string.pattern.base": emailPatternValidateMsg }),
  password: Joi.string().min(8).max(64),
});

export const changeThemeSchema = Joi.object({
  theme: Joi.string().valid("light", "dark", "violet").insensitive().required(),
});

export const sendHelpMsgSchema = Joi.object({
  email: Joi.string()
    .pattern(emailRegexp)
    .messages({ "string.pattern.base": emailPatternValidateMsg })
    .required(),
  comment: Joi.string().min(4).max(3000).required(),
});
