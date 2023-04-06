const Joi = require("joi");

module.exports = Joi.object().keys({
  punct_lucru_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("punct lucru  id incorect");
      error.code = 400;
      throw error;
    }),
  nume_punct_lucru: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("nume punct lucru incorect");
      error.code = 400;
      throw error;
    }),
  adresa: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("adresa punct lucru incorecta");
      error.code = 400;
      throw error;
    }),
  locatie_gps: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("locatie gps punct de lucru incorecta");
      error.code = 400;
      throw error;
    }),
  vanzari_totale: Joi.number()
    .strict()
    .error(() => {
      var error = new Error("vanzari totale pe punct de lucru incorecte");
      error.code = 400;
      throw error;
    }),
});
