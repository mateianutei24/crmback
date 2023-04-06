const Joi = require("joi");

module.exports = Joi.object().keys({
  tip_angajat_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("tip angajat id incorect");
      error.code = 400;
      throw error;
    }),
  nume_tip_angajat: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("numele tipului de  angajat este incorect");
      error.code = 400;
      throw error;
    }),
});
