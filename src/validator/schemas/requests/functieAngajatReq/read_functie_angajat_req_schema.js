const Joi = require("joi");

module.exports = Joi.object().keys({
  functie_angajat_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("functie angajat id incorect");
      error.code = 400;
      throw error;
    }),
});
