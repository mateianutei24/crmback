const Joi = require("joi");

module.exports = Joi.object().keys({
  nume_status_actiune: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error(" nume status actiune incorect");
      error.code = 400;
      throw error;
    }),
});
