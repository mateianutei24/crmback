const Joi = require("joi");

module.exports = Joi.object().keys({
  tip_actiune_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("tip actiune id incorect");
      error.code = 400;
      throw error;
    }),
});
