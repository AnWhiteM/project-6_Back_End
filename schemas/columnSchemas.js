import Joi from "joi";

export const createColumnSchema = Joi.object({
  title: Joi.string().required(),
});

export const updateColumnSchema = Joi.object({
  title: Joi.string().required(),
});
