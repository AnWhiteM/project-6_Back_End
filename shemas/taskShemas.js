import Joi from "joi";

export const taskShema = Joi.object({
    title: Joi.string(), required(),
    description: Joi.string(), required(),
    labelColor: Joi.string(), required(),
    description: Joi.string(), required(),
    deadline: Joi.date(), required(),
    priority:  Joi.string(), required(),
})