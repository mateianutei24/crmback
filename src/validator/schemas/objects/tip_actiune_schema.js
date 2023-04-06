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
  timp_executie: Joi.number()
    .strict()
    .error(() => {
      var error = new Error("timp executie actiune incorect");
      error.code = 400;
      throw error;
    }),
  rezultate_disponibile: Joi.array()
    .items(
      Joi.string()
        .strict()
        .error(() => {
          var error = new Error("rezultat posibil actiune incorect");
          error.code = 400;
          throw error;
        })
    )
    .error(() => {
      var error = new Error("lista rezultate posibile incorecta");
      error.code = 400;
      throw error;
    }),
});
