const express = require("express");

module.exports = function produseRoute(useCases, model) {
  const router = express.Router();

  router
    .route("/")
    .get(async (req, res, next) => {
      try {
        const getProdusReqObj = model.buildReadProdusReq({
          produs_id: req.query.produs_id,
        });
        const response = await useCases.readProdusUseCase(getProdusReqObj);
        res.status(200).send(response);
      } catch (error) {
        next(error);
      }
    })
    .post(async (req, res, next) => {
      try {
        const addProdusReqObj = model.buildCreateProdusReq(req.body);
        const response = await useCases.addProdusUseCase(addProdusReqObj);
        res.status(200).send("Produs added succesfully");
      } catch (error) {
        next(error);
      }
    })
    .patch(async (req, res, next) => {
      try {
        const updateProdusReqObj = model.buildUpdateProdusReq(req.body);
        const response = await useCases.updateProdusUseCase(updateProdusReqObj);
        res.status(200).send("Produs updated succesfully");
      } catch (error) {
        next(error);
      }
    })
    .delete(async (req, res, next) => {
      try {
        const deleteProdusReqObj = model.buildDeleteProdusReq(req.body);
        const response = await useCases.deleteProdusUseCase(deleteProdusReqObj);
        res.status(200).send("Produs deleted succesfully");
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
      const response = await useCases.getProdusePaginationUseCase(
        paginationObject
      );
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  });
  return router;
};
