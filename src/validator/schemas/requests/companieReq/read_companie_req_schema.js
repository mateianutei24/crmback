const Joi = require("joi");

module.exports = Joi.object().keys({
  companie_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("companie id incorect");
      error.code = 400;
      throw error;
    }),
});
