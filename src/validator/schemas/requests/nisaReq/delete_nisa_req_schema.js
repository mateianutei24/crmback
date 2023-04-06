const Joi = require("joi");

module.exports = Joi.object().keys({
  nisa_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("nisa id incorect");
      error.code = 400;
      throw error;
    }),
});
