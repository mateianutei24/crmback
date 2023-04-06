const Joi = require("joi");

module.exports = Joi.object().keys({
  oportunitate_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("oportunitate id incorect");
      error.code = 400;
      throw error;
    }),
});
