const Joi = require("joi");

module.exports = Joi.object().keys({
  tip_obiectiv: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("tip obiectiv incorect");
      error.code = 400;
      throw error;
    }),
  titlu_obiectiv: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("titlu obiectiv  incorect");
      error.code = 400;
      throw error;
    }),
  nisa_id: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("nisa obiectiv incorecta");
      error.code = 400;
      throw error;
    }),
  punct_lucru_id: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("punct lucru id  incorect");
      error.code = 400;
      throw error;
    }),
  companie_id: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("companie id incorect");
      error.code = 400;
      throw error;
    }),
  vanzari_totale: Joi.number()
    .strict()
    .error(() => {
      var error = new Error("vanzari totale companie incorecte");
      error.code = 400;
      throw error;
    }),
  data_creare_initiala: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("data creare initiala incorecta");
      error.code = 400;
      throw error;
    }),
  adresa_emitere: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("data emitere initiala incorecta");
      error.code = 400;
      throw error;
    }),
  numar_luni: Joi.number()
    .strict()
    .error(() => {
      var error = new Error("numar luni incorect");
      error.code = 400;
      throw error;
    }),
  data_limita: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("data limita incorecta");
      error.code = 400;
      throw error;
    }),
});
