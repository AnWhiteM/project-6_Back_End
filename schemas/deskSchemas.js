import Joi from "joi";

export const createDeskSchema = Joi.object({
  title: Joi.string().required(),
  icon: Joi.string().required(),
  background: Joi.string().required(),
});

export const updateDeskSchema = Joi.object({
  title: Joi.string(),
  icon: Joi.string(),
  background: Joi.string(),
})
  .min(1)
  .messages({ "object.min": "Body must have at least one field" });
