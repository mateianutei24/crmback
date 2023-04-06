const express = require("express");

module.exports = function punctLucruRoute(controller, model) {
  const router = express.Router();

  router
    .route("/")
    .get(async (req, res, next) => {
      try {
        const readPunctLucruReqObj = model.buildReadPunctLucruReq({
          punct_lucru_id: req.query.punctLucruId,
        });
        const response = await controller.getObject(
          '"Puncte de lucru"',
          "punct_lucru_id",
          readPunctLucruReqObj.getPunctLucruId()
        );
        res.status(200).send(response);
      } catch (error) {
        next(error);
      }
    })
    .post(async (req, res, next) => {
      try {
        const createPunctLucruReqObj = model.buildCreatePunctLucruReq(req.body);
        const response = await controller.addIntoDatabase(
          `"Puncte de lucru"(nume_punct_lucru, adresa, locatie_gps,vanzari_totale) VALUES($1,$2,$3,$4)`,
          [
            createPunctLucruReqObj.getNumePunctLucru(),
            createPunctLucruReqObj.getAdresa(),
            createPunctLucruReqObj.getLocatieGps(),
            createPunctLucruReqObj.getVanzariTotale(),
          ]
        );
        res.status(200).send("Punct de lucru adaugat cu succes");
      } catch (error) {
        next(error);
      }
    })
    .delete(async (req, res, next) => {
      try {
        const deletePunctLucruReqObj = model.buildDeletePunctLucruReq(req.body);
        const response = await controller.deleteFromDatabase(
          '"Puncte de lucru"',
          "punct_lucru_id",
          deletePunctLucruReqObj.getPunctLucruId()
        );
        res.status(200).send("Punct de Lucru sters cu succes");
      } catch (error) {
        next(error);
      }
    })
    .patch(async (req, res, next) => {
      try {
        const updatePunctLucruReqObj = model.buildUpdatePunctLucruReq(req.body);
        const response = await controller.updateOneObject(
          `"Puncte de lucru" SET punct_lucru_id = $1 , nume_punct_lucru = $2, adresa = $3, locatie_gps=$4, vanzari_totale=$5 `,
          "punct_lucru_id",
          updatePunctLucruReqObj.getPunctLucruId(),
          [
            updatePunctLucruReqObj.getPunctLucruId(),
            updatePunctLucruReqObj.getNumePunctLucru(),
            updatePunctLucruReqObj.getAdresa(),
            updatePunctLucruReqObj.getLocatieGps(),
            updatePunctLucruReqObj.getVanzariTotale(),
          ]
        );
        res.status(200).send("Punct de Lucru updatat cu succes");
      } catch (error) {
        next(error);
      }
    });

  router.route("/getAll").get(async (req, res, next) => {
    try {
      const response = await controller.getAllObjects('"Puncte de lucru"');
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  });
  return router;
};
