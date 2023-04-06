const Joi = require("joi");

module.exports = Joi.object().keys({
  angajat_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("id angajat incorect");
      error.code = 400;
      throw error;
    }),
  nume: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("nume angajat incorect");
      error.code = 400;
      throw error;
    }),
  prenume: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("prenume angajat incorect");
      error.code = 400;
      throw error;
    }),
  tip_angajat_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("tip angajat incorect");
      error.code = 400;
      throw error;
    }),
  functie_angajat_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("functie angajat incorecta");
      error.code = 400;
      throw error;
    }),
  email: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("email angajat incorect");
      error.code = 400;
      throw error;
    }),
  numar_telefon: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("numar telefon angajat angajat incorect");
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
