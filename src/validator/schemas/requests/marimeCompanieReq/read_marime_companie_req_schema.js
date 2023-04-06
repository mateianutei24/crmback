const Joi = require("joi");

module.exports = Joi.object().keys({
  marime_companie_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("marime companie id  incorect");
      error.code = 400;
      throw error;
    }),
});
