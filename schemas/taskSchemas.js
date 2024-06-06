import Joi from "joi";

export const createTaskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  labelColor: Joi.string().required(),
  deadline: Joi.date().required(),
  priority: Joi.string().required(),
});

export const updateTaskSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  labelColor: Joi.string(),
  deadline: Joi.date(),
  priority: Joi.string(),
})
  .min(1)
  .messages({ "object.min": "Body must have at least one field" });
