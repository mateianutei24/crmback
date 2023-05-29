const Joi = require("joi");

module.exports = Joi.object().keys({
  descriere: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("descriere oportunitate incorecta");
      error.code = 400;
      throw error;
    }),
  titlu_oportunitate: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("titlu oportunitate  incorect");
      error.code = 400;
      throw error;
    }),
  tip_oportunitate: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("tip oportunitate  incorect");
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
  data_emitere: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("data emitere initiala incorecta");
      error.code = 400;
      throw error;
    }),
  perioada_desfasurare: Joi.number()
    .strict()
    .error(() => {
      var error = new Error("perioada desfasurare oportunitate incorecta");
      error.code = 400;
      throw error;
    }),
  data_limita: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("data limita obiectiv incorecta");
      error.code = 400;
      throw error;
    }),
  obiectiv_id: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("obiectiv id incorect");
      error.code = 400;
      throw error;
    }),
  identificat_de: Joi.string()
    .strict()
    .error(() => {
      var error = new Error(
        "id angajat care a identificat oportunitatea incorect"
      );
      error.code = 400;
      throw error;
    }),
  vanzari_totale: Joi.number()
    .strict()
    .error(() => {
      var error = new Error("vanzari totale oportunitate invalide");
      error.code = 400;
      throw error;
    }),
});
