const Joi = require("joi");

module.exports = Joi.object().keys({
  status_actiune_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("status actiune id incorect");
      error.code = 400;
      throw error;
    }),
});
