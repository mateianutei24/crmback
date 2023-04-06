const Joi = require("joi");

module.exports = Joi.object().keys({
  limita: Joi.number()
    .required()
    .strict()
    .error(() => {
      var error = new Error("limita obiecte incorecta");
      error.code = 400;
      throw error;
    }),
  last_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("adresa punct lucru incorecta");
      error.code = 400;
      throw error;
    }),
});
