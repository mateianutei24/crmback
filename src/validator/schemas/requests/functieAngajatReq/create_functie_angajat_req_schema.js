const Joi = require("joi");

module.exports = Joi.object().keys({
  nume_functie_angajat: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("numele functiei angajatului este incorect");
      error.code = 400;
      throw error;
    }),
});
