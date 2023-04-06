const Joi = require("joi");

module.exports = Joi.object().keys({
  lead_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("lead id incorect");
      error.code = 400;
      throw error;
    }),
});
