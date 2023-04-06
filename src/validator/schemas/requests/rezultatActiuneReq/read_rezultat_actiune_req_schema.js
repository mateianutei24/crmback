const Joi = require("joi");

module.exports = Joi.object().keys({
  rezultat_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("rezultat id incorect");
      error.code = 400;
      throw error;
    }),
});
