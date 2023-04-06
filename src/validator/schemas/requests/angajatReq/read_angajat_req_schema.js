const Joi = require("joi");

module.exports = Joi.object().keys({
  angajat_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("id angajat incorect");
      error.code = 400;
      throw error;
    }),
});
