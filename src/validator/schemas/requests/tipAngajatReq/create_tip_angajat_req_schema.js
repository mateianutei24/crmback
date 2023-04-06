const Joi = require("joi");

module.exports = Joi.object().keys({
  nume_tip_angajat: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("numele tipului de  angajat este incorect");
      error.code = 400;
      throw error;
    }),
});
