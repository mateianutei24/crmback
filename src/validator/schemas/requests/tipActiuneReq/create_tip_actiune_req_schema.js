const Joi = require("joi");

module.exports = Joi.object().keys({
  nume_tip_actiune: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("nume tip actiune  incorect");
      error.code = 400;
      throw error;
    }),
  timp_executie: Joi.number()
    .required()
    .strict()
    .error(() => {
      var error = new Error("timp executie actiune incorect");
      error.code = 400;
      throw error;
    }),
});
