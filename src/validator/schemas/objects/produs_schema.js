const Joi = require("joi");

module.exports = Joi.object().keys({
  produs_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("produs id incorect");
      error.code = 400;
      throw error;
    }),
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
