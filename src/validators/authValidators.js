const Joi = require("joi");

const signupValidator = Joi.object({
  username: Joi.string().alphanum().label("username"),
  email: Joi.string().email().label("Email"),
  password: Joi.string().min(6).label("Password"),
})
  .prefs({ presence: "required" })
  .messages({
    "alphanum.base": "{#label} must be alphanumeric",
    "string.base": "{#label} must be a text.",
    "string.empty": "{#label} cannot be empty.",
    "string.email": "Please provide a valid {#label}.",
    "string.min": "{#label} must be at least {#limit} characters.",
    "string.pattern.base": "{#label} must be between 8 and 12 digits.",
    "any.required": "{#label} is required.",
  });


  
const loginValidator = Joi.object({
  email: Joi.string().email().label("Email"),
  password: Joi.string().label("Password"),
})
  .prefs({ presence: "required" })
  .messages({
    "string.base": "{#label} must be a text.",
    "string.empty": "{#label} cannot be empty.",
    "string.email": "Please provide a valid {#label}.",
    "any.required": "{#label} is required.",
  });

module.exports = {
  signupValidator,
  loginValidator,
};
