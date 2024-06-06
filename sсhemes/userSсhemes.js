import Joi from "joi";

export const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export const registerScheme = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().required().min(6),
  });
  
export const loginScheme = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().required().min(6),
  });