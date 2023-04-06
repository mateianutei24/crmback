const Joi = require("joi");

module.exports = Joi.object().keys({
  nume_tip_rezultat: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("nume tip rezultat  incorect");
      error.code = 400;
      throw error;
    }),
});
