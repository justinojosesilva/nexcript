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
  STRIPE_SECRET_KEY: Joi.string().required(),
  STRIPE_WEBHOOK_SECRET: Joi.string().required(),
  STRIPE_SUCCESS_URL: Joi.string().uri().required(),
  STRIPE_CANCEL_URL: Joi.string().uri().required(),
  STRIPE_PORTAL_RETURN_URL: Joi.string().uri().required(),
  RESEND_API_KEY: Joi.string().required(),
  APP_URL: Joi.string().uri().required(),
  ADMIN_API_KEY: Joi.string().min(32).optional(),
  SENTRY_DSN: Joi.string().uri().optional(),
});
