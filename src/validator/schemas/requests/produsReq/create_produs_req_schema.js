const Joi = require("joi");

module.exports = Joi.object().keys({
  nume_produs: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("nume produs incorect");
      error.code = 400;
      throw error;
    }),
  gama: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("gama produs incorecta");
      error.code = 400;
      throw error;
    }),
});
