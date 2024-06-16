import Joi from "joi";

export const createTaskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  deadline: Joi.date().required(),
  priority: Joi.string().valid("Without", "Low", "Medium", "High").required(),
});

export const updateTaskSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  deadline: Joi.date(),
  priority: Joi.string().valid("Without", "Low", "Medium", "High"),
})
  .min(1)
  .messages({ "object.min": "Body must have at least one field" });

const objectIdRegex = /^[0-9a-fA-F]{24}$/;

export const changeTaskOwnerSchema = Joi.object({
  owner: Joi.string().regex(objectIdRegex).required(),
});
