const express = require("express");
const useCases = require("../../useCases/useCases");

module.exports = function obiectiveRoute(useCases, model) {
  const router = express.Router();

  router
    .route("/")
    .get(async (req, res, next) => {
      try {
        const getObiectivReqObject = model.buildReadObiectivReq({
          obiectiv_id: req.query.obiectiv_id,
        });
        const response = await useCases.readObiectivUseCase(
          getObiectivReqObject
        );
        res.status(200).send(response);
      } catch (error) {
        next(error);
      }
    })
    .post(async (req, res, next) => {
      try {
        const createObiectivReqObject = model.buildCreateObiectivReq(req.body);
        const response = await useCases.addObiectivUseCase(
          createObiectivReqObject
        );
        res.status(200).send("test obiective");
      } catch (error) {
        next(error);
      }
    })
    .patch(async (req, res, next) => {
      try {
        const updateObiectivReqObject = model.buildUpdateObiectivReq(req.body);
        const response = await useCases.updateObiectivUseCase(
          updateObiectivReqObject
        );
        res.status(200).send("test obiective");
      } catch (error) {
        next(error);
      }
    })
    .delete(async (req, res, next) => {
      try {
        const deleteObiectivReqObj = model.buildDeleteObiectivReq(req.body);
        const response = await useCases.deleteObiectivUseCase(
          deleteObiectivReqObj
        );
        res.status(200).send("test obiective");
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
      const response = await useCases.getObiectivePaginationCase(
        paginationObject
      );
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  });

  router
    .route("/tip_obiectiv")
    .get(async (req, res, next) => {
      try {
        const readTipObiectivReqObj = model.buildReadTipObiectivReq({
          tip_obiectiv_id: req.query.tip_obiectiv_id,
        });
        const response = await useCases.readTipObiectivUseCase(
          readTipObiectivReqObj
        );
        res.status(200).send(response);
      } catch (error) {
        next(error);
      }
    })
    .post(async (req, res, next) => {
      try {
        const createTipObiectivReqObj = model.buildCreateTipObiectivReq(
          req.body
        );
        const response = await useCases.addTipObiectivUseCase(
          createTipObiectivReqObj
        );

        res.status(200).send("Tip Obiectiv added succesfully");
      } catch (error) {
        next(error);
      }
    })
    .patch(async (req, res, next) => {
      try {
        const updateTipObiectivReqObj = model.buildUpdateTipObiectivReq(
          req.body
        );
        const response = await useCases.updateTipObiectivUseCase(
          updateTipObiectivReqObj
        );
        res.status(200).send("Tip obiectiv updated succesfully");
      } catch (error) {
        next(error);
      }
    })
    .delete(async (req, res, next) => {
      try {
        const deleteTipObiectivReqObj = model.buildDeleteTipObiectivReq(
          req.body
        );
        const response = await useCases.deleteTipObiectivUseCase(
          deleteTipObiectivReqObj
        );
        res.status(200).send("Tip obiectiv deleted succesfully");
      } catch (error) {
        next(error);
      }
    });

  router.route("/tip_obiectiv/pagination").get(async (req, res, next) => {
    try {
      const paginationObject = model.buildPaginationReq({
        limita: parseInt(req.query.limita),
        last_id: req.query.last_id,
      });
      const response = await useCases.getTipuriObiectivPaginationUseCase(
        paginationObject
      );
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  });
  return router;
};
