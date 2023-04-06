const Joi = require("joi");

module.exports = Joi.object().keys({
  activitate_companie_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("activitate companie id incorect");
      error.code = 400;
      throw error;
    }),
});
