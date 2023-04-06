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
  nume_functie_angajat: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("numele functiei angajatului este incorect");
      error.code = 400;
      throw error;
    }),
});
