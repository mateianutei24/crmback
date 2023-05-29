const express = require("express");

module.exports = function oportunitatiRoute(useCases, model) {
  const router = express.Router();

  router
    .route("/")
    .get(async (req, res, next) => {
      try {
        const getOportunitateReqObj = model.buildReadOportunitateReq({
          oportunitate_id: req.query.oportunitate_id,
        });
        const response = await useCases.readOportunitateUseCase(
          getOportunitateReqObj
        );
        res.status(200).send(response);
      } catch (error) {
        next(error);
      }
    })
    .post(async (req, res, next) => {
      try {
        const addOportunitateReqObj = model.buildCreateOportunitateReq(
          req.body
        );
        const response = await useCases.addOportunitateUseCase(
          addOportunitateReqObj
        );
        res.status(200).send("Oportunitate added succesfully");
      } catch (error) {
        next(error);
      }
    })
    .patch(async (req, res, next) => {
      try {
        const updateOportunitateReqObj = model.buildUpdateOportunitateReq(
          req.body
        );
        const response = await useCases.updateOportunitateUseCase(
          updateOportunitateReqObj
        );
        res.status(200).send("Oportunitate added succesfully");
      } catch (error) {
        next(error);
      }
    })
    .delete(async (req, res, next) => {
      try {
        const deleteOportunitateReqObj = model.buildDeleteOportunitateReq(
          req.body
        );
        const response = await useCases.deleteOportunitateUseCase(
          deleteOportunitateReqObj
        );
        res.status(200).send("Oportunitate deleted succesfully");
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
      const response = await useCases.getOportunitatiPaginationUseCase(
        paginationObject
      );
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  });
  router
    .route("/tip_oportunitate")
    .get(async (req, res, next) => {
      try {
        const readTipOportunitateReqObj = model.buildReadTipOportunitateReq({
          tip_oportunitate_id: req.query.tip_oportunitate_id,
        });
        const response = await useCases.readTipOportunitateUseCase(
          readTipOportunitateReqObj
        );
        res.status(200).send(response);
      } catch (error) {
        next(error);
      }
    })
    .post(async (req, res, next) => {
      try {
        const readTipOportunitateReqObj = model.buildCreateTipOportunitateReq(
          req.body
        );
        const response = await useCases.addTipOportunitateUseCase(
          readTipOportunitateReqObj
        );
        res.status(200).send("Tip Oportunitate Adaugat cu succes");
      } catch (error) {
        next(error);
      }
    })
    .patch(async (req, res, next) => {
      try {
        const updateTipOportunitateReqObj = model.buildUpdateTipOportunitateReq(
          req.body
        );
        const response = await useCases.updateTipOportunitateUseCase(
          updateTipOportunitateReqObj
        );
        res.status(200).send("Tip oportunitate updatat cu succes");
      } catch (error) {
        next(error);
      }
    })
    .delete(async (req, res, next) => {
      try {
        const deleteTipOportunitateReqObj = model.buildDeleteTipOportunitateReq(
          req.body
        );
        const response = await useCases.deleteTipOportunitateUseCase(
          deleteTipOportunitateReqObj
        );
        res.status(200).send("Tip oportunitate sters cu succes");
      } catch (error) {
        next(error);
      }
    });

  router.route("/tip_oportunitate/pagination").get(async (req, res, next) => {
    try {
      const paginationObject = model.buildPaginationReq({
        limita: parseInt(req.query.limita),
        last_id: req.query.last_id,
      });
      const response = await useCases.getObiectivePaginationCase(
        paginationObject
      );
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  });
  return router;
};
