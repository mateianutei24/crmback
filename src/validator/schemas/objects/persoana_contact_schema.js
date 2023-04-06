const Joi = require("joi");

module.exports = Joi.object().keys({
  persoana_contact_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("persoana contact id incorect");
      error.code = 400;
      throw error;
    }),
  nume: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("nume persoana contact incorect");
      error.code = 400;
      throw error;
    }),
  prenume: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("prenume persoana contact incorect");
      error.code = 400;
      throw error;
    }),
  descriere: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("descriere persoana contact incorecta");
      error.code = 400;
      throw error;
    }),
  numar_telefon: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("numar telefon persoana  contact incorect");
      error.code = 400;
      throw error;
    }),
  adresa_email: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("adresa_email persoana  contact incorecta");
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
});
