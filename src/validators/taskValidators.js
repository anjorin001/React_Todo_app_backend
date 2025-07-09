const Joi = require("joi");

const createTaskValidator = Joi.object({
  id: Joi.string().min(3).label("Task ID"),
  text: Joi.string().min(3).label("Text"),
  time: Joi.string().min(3).label("Time"),
  page: Joi.string().min(3).label("Page"),
  date: Joi.string().label("Date"),
})
  .prefs({ presence: "required" })
  .messages({
    "string.base": "{#label} must be text.",
    "string.empty": "{#label} cannot be empty.",
    "string.min": "{#label} must be at least {#limit} characters.",
    "any.required": "{#label} is required.",
  });

const updateTaskValidator = Joi.object({
  id: Joi.string().label("Task ID").required(),
  text: Joi.string().min(3).label("Text"),
  time: Joi.string().min(3).label("Time"),
  completed: Joi.boolean().label("Completed"),
  date: Joi.string().label("Date"),
  page: Joi.string().min(3).label("Page").required(),
}).messages({
  "string.base": "{#label} must be text.",
  "string.empty": "{#label} cannot be empty.",
  "string.hex": "{#label} must be a valid hex string.",
  "string.length": "{#label} must be exactly {#limit} characters.",
  "string.min": "{#label} must be at least {#limit} characters.",
  "any.required": "{#label} is required.",
});

const deleteTaskValidator = Joi.object({
  id: Joi.string().label("Task ID").required(),
  page: Joi.string().min(3).label("Page").required(),
})
  .prefs({ presence: "required" })
  .messages({
    "string.base": "{#label} must be text.",
    "string.empty": "{#label} cannot be empty.",
    "string.hex": "{#label} must be a valid hex string.",
    "string.length": "{#label} must be exactly {#limit} characters.",
    "any.required": "{#label} is required.",
  });

const completedTaskValidator = Joi.object({
  id: Joi.string().label("Task ID").required(),
  page: Joi.string().min(3).label("Page").required(),
})
  .prefs({ presence: "required" })
  .messages({
    "string.base": "{#label} must be text.",
    "string.empty": "{#label} cannot be empty.",
    "string.hex": "{#label} must be a valid hex string.",
    "string.length": "{#label} must be exactly {#limit} characters.",
    "any.required": "{#label} is required.",
  });

module.exports = {
  createTaskValidator,
  updateTaskValidator,
  deleteTaskValidator,
  completedTaskValidator,
};
