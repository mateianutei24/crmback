const Joi = require("joi");

module.exports = Joi.object().keys({
  punct_lucru_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("punct lucru  id incorect");
      error.code = 400;
      throw error;
    }),
});
