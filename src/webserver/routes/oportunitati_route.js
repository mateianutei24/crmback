const express = require("express");

module.exports = function oportunitatiRoute(controller, model) {
  const router = express.Router();

  router.route("/").get(async (req, res, next) => {
    try {
      res.status(200).send("test oportunitati");
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
        const response = await controller.getObject(
          '"Tipuri Oportunitati"',
          "tip_oportunitate_id",
          readTipOportunitateReqObj.getTipOportunitateId()
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
        const response = await controller.addIntoDatabase(
          `"Tipuri Oportunitati"(nume_tip_oportunitate) VALUES($1)`,
          [readTipOportunitateReqObj.getNumeTipOportunitate()]
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
        const response = await controller.updateOneObject(
          `"Tipuri Oportunitati" SET nume_tip_oportunitate =$1`,
          "tip_oportunitate_id",
          updateTipOportunitateReqObj.getTipOportunitateId(),
          [updateTipOportunitateReqObj.getNumeTipOportunitate()]
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
        const response = await controller.deleteFromDatabase(
          '"Tipuri Oportunitati"',
          "tip_oportunitate_id",
          deleteTipOportunitateReqObj.getTipOportunitateId()
        );
        res.status(200).send("Tip oportunitate sters cu succes");
      } catch (error) {
        next(error);
      }
    });

  router.route("/tip_oportunitate/getAll").get(async (req, res, next) => {
    try {
      const response = await controller.getAllObjects('"Tipuri Oportunitati"');
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  });
  return router;
};
