const express = require("express");

module.exports = function punctLucruRoute(useCases, model) {
  const router = express.Router();

  router
    .route("/")
    .get(async (req, res, next) => {
      try {
        const readPunctLucruReqObj = model.buildReadPunctLucruReq({
          punct_lucru_id: req.query.punctLucruId,
        });
        const response = await useCases.readPunctLucruUseCase(
          readPunctLucruReqObj
        );
        res.status(200).send(response);
      } catch (error) {
        next(error);
      }
    })
    .post(async (req, res, next) => {
      try {
        const createPunctLucruReqObj = model.buildCreatePunctLucruReq(req.body);
        const response = await useCases.addPunctLucruUseCase(
          createPunctLucruReqObj
        );
        res.status(200).send("Punct de lucru adaugat cu succes");
      } catch (error) {
        next(error);
      }
    })
    .delete(async (req, res, next) => {
      try {
        const deletePunctLucruReqObj = model.buildDeletePunctLucruReq(req.body);
        const response = await useCases.deletePunctLucruUseCase(
          deletePunctLucruReqObj
        );
        res.status(200).send("Punct de Lucru sters cu succes");
      } catch (error) {
        next(error);
      }
    })
    .patch(async (req, res, next) => {
      try {
        const updatePunctLucruReqObj = model.buildUpdatePunctLucruReq(req.body);
        const response = await useCases.updatePunctLucruUseCase(
          updatePunctLucruReqObj
        );
        res.status(200).send("Punct de Lucru updatat cu succes");
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
      const response = await useCases.getPuncteLucruPaginationUseCase(
        paginationObject
      );
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  });
  return router;
};
