const Joi = require("joi");

module.exports = Joi.object().keys({
  activitate_companie: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("denumire activitate companie incorecta");
      error.code = 400;
      throw error;
    }),
});
