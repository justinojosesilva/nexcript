import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  PORT: Joi.number().default(3002),
  DATABASE_URL: Joi.string().uri().required(),
  REDIS_URL: Joi.string().uri().required(),
  JWT_SECRET: Joi.string().min(16).required(),
  JWT_EXPIRES_IN: Joi.string().required(),
  YOUTUBE_API_KEY: Joi.string().required(),
  GOOGLE_TRENDS_REGION: Joi.string().required(),
  OPENAI_API_KEY: Joi.string().required(),
  MAX_COST_PER_SCRIPT_BRL: Joi.number().positive().default(1.5),
});
