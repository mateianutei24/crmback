const Joi = require("joi");

module.exports = Joi.object().keys({
  tip_rezultat: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("tip rezultat  incorect");
      error.code = 400;
      throw error;
    }),
});
