const Joi = require("joi");

module.exports = Joi.object().keys({
  vanzare_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("vanzare id incorect");
      error.code = 400;
      throw error;
    }),
});
