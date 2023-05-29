const Joi = require("joi");

module.exports = Joi.object().keys({
  tip_rezultat: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("tip rezultat incorect");
      error.code = 400;
      throw error;
    }),
  valoare: Joi.number()
    .strict()
    .error(() => {
      var error = new Error("valoare rezultat incorecta");
      error.code = 400;
      throw error;
    }),
  actiune_id: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("actiune id incorect");
      error.code = 400;
      throw error;
    }),
  rezultat_descriere: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("rezultat descriere incorect");
      error.code = 400;
      throw error;
    }),
});
