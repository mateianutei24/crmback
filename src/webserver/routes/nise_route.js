const express = require("express");

module.exports = function niseRoute(useCases, model) {
  const router = express.Router();

  router
    .route("/")
    .get(async (req, res, next) => {
      try {
        const readNisaReqObj = model.buildReadNisaReq({
          nisa_id: req.query.nisa_id,
        });
        const response = await useCases.readNisaUseCase(readNisaReqObj);
        res.status(200).send(response);
      } catch (error) {
        next(error);
      }
    })
    .post(async (req, res, next) => {
      try {
        const createNisaReqObj = model.buildCreateNisaReq(req.body);
        const response = await useCases.addNisaUseCase(createNisaReqObj);
        res.status(200).send("Nisa adaugata cu success");
      } catch (error) {
        next(error);
      }
    })
    .patch(async (req, res, next) => {
      try {
        const updateNisaReqObj = model.buildUpdateNisaReq(req.body);
        const response = await useCases.updateNisaUseCase(updateNisaReqObj);
        res.status(200).send("Nisa updatata cu succes");
      } catch (error) {
        next(error);
      }
    })
    .delete(async (req, res, next) => {
      try {
        const deleteNisaReqObj = model.buildDeleteNisaReq(req.body);

        const response = await useCases.deleteNisaUseCase(deleteNisaReqObj);
        res.status(200).send("Nisa stearsa cu succes");
      } catch (error) {
        next(error);
      }
    });
  router.route("/pagination").get(async (req, res, next) => {
    try {
      const paginationObject = model.buildPaginationReq({
        limita: parseInt(req.query.limita),
        last_id: req.query.last_id,
      });

      const response = await useCases.getNisePaginationUseCase(
        paginationObject
      );
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  });
  return router;
};
