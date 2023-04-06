const Joi = require("joi");

module.exports = Joi.object().keys({
  tip_actiune_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("tip actiune incorect");
      error.code = 400;
      throw error;
    }),
  tip_rezultat_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("tip rezultat incorecta");
      error.code = 400;
      throw error;
    }),
});
