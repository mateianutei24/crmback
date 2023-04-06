const express = require("express");

module.exports = function niseRoute(controller, model) {
  const router = express.Router();

  router
    .route("/")
    .get(async (req, res, next) => {
      try {
        const readNisaReqObj = model.buildReadNisaReq({
          nisa_id: req.query.nisa_id,
        });
        const response = await controller.getObject(
          '"Nise"',
          "nisa_id",
          readNisaReqObj.getNisaId()
        );
        res.status(200).send(response);
      } catch (error) {
        next(error);
      }
    })
    .post(async (req, res, next) => {
      try {
        const createNisaReqObj = model.buildCreateNisaReq(req.body);
        const response = await controller.addIntoDatabase(
          `"Nise"(nume_nisa,vanzari_totale,persoana_responsabila) VALUES($1,$2,$3)`,
          [
            createNisaReqObj.getNumeNisa(),
            createNisaReqObj.getVanzariTotale(),
            createNisaReqObj.getPersoanaResponsabila(),
          ]
        );
        res.status(200).send("Nisa adaugata cu success");
      } catch (error) {
        next(error);
      }
    })
    .patch(async (req, res, next) => {
      try {
        const updateNisaReqObj = model.buildUpdateNisaReq(req.body);
        const response = await controller.updateOneObject(
          `"Nise" SET nume_nisa =$1, vanzari_totale = $2, persoana_responsabila=$3`,
          "nisa_id",
          updateNisaReqObj.getNisaId(),
          [
            updateNisaReqObj.getNumeNisa(),
            updateNisaReqObj.getVanzariTotale(),
            updateNisaReqObj.getPersoanaResponsabila(),
          ]
        );
        res.status(200).send("Nisa updatata cu succes");
      } catch (error) {
        next(error);
      }
    })
    .delete(async (req, res, next) => {
      try {
        const deleteNisaReqObj = model.buildDeleteNisaReq(req.body);
        const response = await controller.deleteFromDatabase(
          '"Nise"',
          "nisa_id",
          deleteNisaReqObj.getNisaId()
        );
        res.status(200).send("Nisa stearsa cu succes");
      } catch (error) {
        next(error);
      }
    });
  router.route("/getAll").get(async (req, res, next) => {
    try {
      const response = await controller.getAllObjects('"Nise"');
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  });
  return router;
};
