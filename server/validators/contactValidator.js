import Joi from 'joi';

const ALLOWED_SERVICES = [
  'Digital News & Media',
  'Public Relations & Corporate Communications',
  'Digital Marketing & Advertising',
  'Consultancy',
  'General Enquiry',
  'Partnership',
  'Other',
  '',
];

export const contactSchema = Joi.object({
  name: Joi.string().trim().min(2).max(120).required().messages({
    'string.min': 'Name must be at least 2 characters.',
    'string.max': 'Name must not exceed 120 characters.',
    'any.required': 'Name is required.',
    'string.empty': 'Name is required.',
  }),

  email: Joi.string()
    .trim()
    .email({ tlds: { allow: false } })
    .max(254)
    .required()
    .messages({
      'string.email': 'Please provide a valid email address.',
      'any.required': 'Email is required.',
      'string.empty': 'Email is required.',
    }),

  phone: Joi.string()
    .trim()
    .allow('')
    .max(25)
    .pattern(/^[+]?[\d\s\-().]{0,25}$/)
    .optional()
    .messages({
      'string.pattern.base': 'Please provide a valid phone number.',
    }),

  organization: Joi.string().trim().allow('').max(200).optional(),

  service: Joi.string()
    .trim()
    .allow('')
    .valid(...ALLOWED_SERVICES)
    .optional()
    .messages({
      'any.only': 'Please select a valid service.',
    }),

  message: Joi.string().trim().min(10).max(2000).required().messages({
    'string.min': 'Message must be at least 10 characters.',
    'string.max': 'Message must not exceed 2000 characters.',
    'any.required': 'Message is required.',
    'string.empty': 'Message is required.',
  }),
});
