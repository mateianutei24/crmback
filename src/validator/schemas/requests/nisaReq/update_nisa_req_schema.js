const Joi = require("joi");

module.exports = Joi.object().keys({
  nisa_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("nisa id incorect");
      error.code = 400;
      throw error;
    }),
  nume_nisa: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("nume nisa incorect");
      error.code = 400;
      throw error;
    }),
  vanzari_totale: Joi.number()
    .strict()
    .error(() => {
      var error = new Error("vanzari totale incorecte");
      error.code = 400;
      throw error;
    }),
  persoana_responsabila: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("id persoana responsabila de nisa incorect");
      error.code = 400;
      throw error;
    }),
});
