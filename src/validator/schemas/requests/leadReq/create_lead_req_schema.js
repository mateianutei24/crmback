const Joi = require("joi");

module.exports = Joi.object().keys({
  companie_id: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("companie id incorect");
      error.code = 400;
      throw error;
    }),
  identificat_de: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("id persoana care a identificat lead incorect");
      error.code = 400;
      throw error;
    }),
  descriere: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("descriere lead incorecta");
      error.code = 400;
      throw error;
    }),
});
