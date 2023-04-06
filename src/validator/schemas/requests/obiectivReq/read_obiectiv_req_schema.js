const Joi = require("joi");

module.exports = Joi.object().keys({
  obiectiv_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("obiectiv id incorect");
      error.code = 400;
      throw error;
    }),
});
