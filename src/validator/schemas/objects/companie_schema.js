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
  nume: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("nume companie incorect");
      error.code = 400;
      throw error;
    }),
  numar_inregistrare: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("numar inregistrare companie incorect");
      error.code = 400;
      throw error;
    }),
  nisa: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("nisa companie incorecta");
      error.code = 400;
      throw error;
    }),
  marime_companie: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("marime companie incorecta");
      error.code = 400;
      throw error;
    }),
  activitate_companie: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("activitate companie incorecta");
      error.code = 400;
      throw error;
    }),
  vanzari_totale: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("vanzari totale companie incorecte");
      error.code = 400;
      throw error;
    }),
  adresa_livrare: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("adresa livrare companie incorecta");
      error.code = 400;
      throw error;
    }),
  adresa_facturare: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("adresa facturare companie incorecta");
      error.code = 400;
      throw error;
    }),
  numar_angajati: Joi.number()
    .strict()
    .error(() => {
      var error = new Error("numar angajati companie incorect");
      error.code = 400;
      throw error;
    }),
  cifra_afaceri: Joi.number()
    .strict()
    .error(() => {
      var error = new Error("cifra afaceri companie incorecta");
      error.code = 400;
      throw error;
    }),
  locatie_gps: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("cifra afaceri companie incorecta");
      error.code = 400;
      throw error;
    }),
  angajat_responsabil: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("angajat responsabil id incorect");
      error.code = 400;
      throw error;
    }),
  punct_lucru_id: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("punct lucru id incorect");
      error.code = 400;
      throw error;
    }),
});
