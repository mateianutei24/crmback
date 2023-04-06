const Joi = require("joi");

module.exports = Joi.object().keys({
  persoana_contact_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("persoana contact id incorect");
      error.code = 400;
      throw error;
    }),
});
