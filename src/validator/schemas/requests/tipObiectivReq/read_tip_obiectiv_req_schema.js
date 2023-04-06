const Joi = require("joi");

module.exports = Joi.object().keys({
  tip_obiectiv_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("tip obiectiv id incorect");
      error.code = 400;
      throw error;
    }),
});
