const Joi = require("joi");

module.exports = Joi.object().keys({
  nume_tip_obiectiv: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("nume tip obiectiv incorect");
      error.code = 400;
      throw error;
    }),
});
