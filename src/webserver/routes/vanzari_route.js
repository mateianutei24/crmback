const express = require("express");

module.exports = function vanzariRoute(useCases, model) {
  const router = express.Router();

  router
    .route("/")
    .get(async (req, res, next) => {
      try {
        const getVanzareReqObj = model.buildReadVanzareReq({
          vanzare_id: req.query.vanzare_id,
        });
        const response = await useCases.readVanzareUseCase(getVanzareReqObj);
        res.status(200).send(response);
      } catch (error) {
        next(error);
      }
    })
    .post(async (req, res, next) => {
      try {
        const addVanzareReqObj = model.buildCreateVanzareReq(req.body);
        const response = await useCases.addVanzareUseCase(addVanzareReqObj);
        res.status(200).send("Vanzare added succesfully");
      } catch (error) {
        next(error);
      }
    })
    .patch(async (req, res, next) => {
      try {
        const updateVanzareReqObj = model.buildUpdateVanzareReq(req.body);
        const response = await useCases.updateVanzareUseCase(
          updateVanzareReqObj
        );
        res.status(200).send("Vanzare updated succesfully");
      } catch (error) {
        next(error);
      }
    })
    .delete(async (req, res, next) => {
      try {
        const deleteVanzareReqObj = model.buildDeleteVanzareReq(req.body);
        const response = await useCases.deleteVanzareUseCase(
          deleteVanzareReqObj
        );
        res.status(200).send("Vanzare deleted succesfully");
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
      const response = await useCases.getVanzariPaginationUseCase(
        paginationObject
      );
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  });
  return router;
};
