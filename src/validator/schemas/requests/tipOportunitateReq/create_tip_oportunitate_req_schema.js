const Joi = require("joi");

module.exports = Joi.object().keys({
  nume_tip_oportunitate: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("numele tipului de  oportunitate este incorect");
      error.code = 400;
      throw error;
    }),
});
