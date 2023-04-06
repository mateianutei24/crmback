const Joi = require("joi");

module.exports = Joi.object().keys({
  tip_oportunitate_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("tip oportunitate id incorect");
      error.code = 400;
      throw error;
    }),
  nume_tip_oportunitate: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("numele tipului de  oportunitate este incorect");
      error.code = 400;
      throw error;
    }),
});
