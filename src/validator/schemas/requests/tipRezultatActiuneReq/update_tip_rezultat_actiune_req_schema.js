const Joi = require("joi");

module.exports = Joi.object().keys({
  tip_rezultat_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("tip rezultat  incorect");
      error.code = 400;
      throw error;
    }),
  nume_tip_rezultat: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("nume tip rezultat  incorect");
      error.code = 400;
      throw error;
    }),
});
