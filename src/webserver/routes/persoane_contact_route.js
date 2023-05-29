const express = require("express");

module.exports = function persoaneContactRoute(useCases, model) {
  const router = express.Router();

  router
    .route("/")
    .get(async (req, res, next) => {
      try {
        const getPersoanaContactReqObj = model.buildReadPersoanaContactReq({
          persoana_contact_id: req.query.persoana_contact_id,
        });
        const response = await useCases.readPersoanaContactUseCase(
          getPersoanaContactReqObj
        );
        res.status(200).send("test persoane contact");
      } catch (error) {
        next(error);
      }
    })
    .post(async (req, res, next) => {
      try {
        const addPersoanaContactReqObj = model.buildCreatePersoanaContactReq(
          req.body
        );
        const response = await useCases.addPersoanaContactUseCase(
          addPersoanaContactReqObj
        );
        res.status(200).send("Persoana contact added succesfully");
      } catch (error) {
        next(error);
      }
    })
    .patch(async (req, res, next) => {
      try {
        const updatePersoanaContactReqObj = model.buildUpdatePersoanaContactReq(
          req.body
        );
        const response = await useCases.updatePersoanaContactUseCase(
          updatePersoanaContactReqObj
        );
        res.status(200).send("Persoana contact updated succesfully");
      } catch (error) {
        next(error);
      }
    })
    .delete(async (req, res, next) => {
      try {
        const deletePersoanaContactReqObj = model.buildDeletePersoanaContactReq(
          req.body
        );
        const response = await useCases.deletePersoanaContactUseCase(
          deletePersoanaContactReqObj
        );
        res.status(200).send("Persoana Contact deleted succesfully");
      } catch (error) {
        next(error);
      }
    });
  router.route("/companie").get(async (req, res, next) => {
    try {
      const paginationObject = model.buildPaginationReq({
        limita: parseInt(req.query.limita),
        last_id: req.query.last_id,
      });
      const companieIdReqObj = model.buildReadCompanieReq({
        companie_id: req.query.companie_id,
      });
      const response =
        await useCases.getPersoaneContactCompaniePaginationUseCase({
          paginationObject,
          companieIdReqObj,
        });
      res.status(200).send(response);
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
      const response = await useCases.getPersoaneContactPaginationUseCase(
        paginationObject
      );
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  });
  return router;
};
