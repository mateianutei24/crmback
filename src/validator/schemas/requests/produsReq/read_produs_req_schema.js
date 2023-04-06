const Joi = require("joi");

module.exports = Joi.object().keys({
  produs_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("produs id incorect");
      error.code = 400;
      throw error;
    }),
});
