const Joi = require("joi");

module.exports = Joi.object().keys({
  email: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("email angajat  incorect");
      error.code = 400;
      throw error;
    }),
  hash: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("hash incorect ");
      error.code = 400;
      throw error;
    }),
  salt: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("salt  incorect");
      error.code = 400;
      throw error;
    }),
});
