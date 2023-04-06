const Joi = require("joi");

module.exports = Joi.object().keys({
  vanzare_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("vanzare id incorect");
      error.code = 400;
      throw error;
    }),
  descriere: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("descriere vanzare incorecta");
      error.code = 400;
      throw error;
    }),
  pret_unitate: Joi.number()
    .strict()
    .error(() => {
      var error = new Error("pret/unitate vanzare incorect");
      error.code = 400;
      throw error;
    }),
  numar_unitati_vandute: Joi.number()
    .strict()
    .error(() => {
      var error = new Error("numar unitati vandute incorect");
      error.code = 400;
      throw error;
    }),
  pret_total: Joi.number()
    .strict()
    .error(() => {
      var error = new Error("pret total incorect");
      error.code = 400;
      throw error;
    }),
  companie_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("companie  id incorect");
      error.code = 400;
      throw error;
    }),
  produs_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("produs id incorect");
      error.code = 400;
      throw error;
    }),
});
