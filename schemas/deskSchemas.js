import Joi from "joi";

export const createDeskSchema = Joi.object({
  title: Joi.string().required(),
  icon: Joi.string().required(),
  background: Joi.object().required(),
});

export const updateDeskSchema = Joi.object({
  title: Joi.string(),
  icon: Joi.string(),
  background: Joi.object(),
})
  .min(1)
  .messages({ "object.min": "Body must have at least one field" });
