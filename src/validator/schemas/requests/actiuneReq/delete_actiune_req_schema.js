const Joi = require("joi");

module.exports = Joi.object().keys({
  actiune_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("id incorect actiune");
      error.code = 400;
      throw error;
    }),
});
