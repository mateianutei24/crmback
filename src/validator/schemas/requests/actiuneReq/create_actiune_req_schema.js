const Joi = require("joi");

module.exports = Joi.object().keys({
  tip_actiune: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("tip actiune incorect");
      error.code = 400;
      throw error;
    }),
  status: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("status incorect");
      error.code = 400;
      throw error;
    }),
  receptor_id: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("receptor id  incorect");
      error.code = 400;
      throw error;
    }),
  emitator_id: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("emitator id incorect");
      error.code = 400;
      throw error;
    }),
  descriere: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("descriere actiune incorecta");
      error.code = 400;
      throw error;
    }),
  data_creare_initiala: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("data creare initiala incorecta");
      error.code = 400;
      throw error;
    }),
  data_emitere: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("data emitere incorecta");
      error.code = 400;
      throw error;
    }),
  due_date: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("data deadline incorecta");
      error.code = 400;
      throw error;
    }),

  oportunitate_id: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("oportunitate id incorect");
      error.code = 400;
      throw error;
    }),
});
