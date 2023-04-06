const Joi = require("joi");

module.exports = Joi.object().keys({
  tip_rezultat_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("tip rezultat id incorect");
      error.code = 400;
      throw error;
    }),
});
