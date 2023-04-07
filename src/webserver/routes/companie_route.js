const express = require("express");

module.exports = function companieRoute(controller, model) {
  const router = express.Router();

  router
    .route("/")
    .get(async (req, res, next) => {
      try {
        const readCompanieReqObj = model.buildReadCompanieReq({
          companie_id: req.query.companie_id,
        });
        const response = await controller.getObject(
          '"Companii"',
          "companie_id",
          readCompanieReqObj.getCompanieId()
        );
        res.status(200).send(response);
      } catch (error) {
        next(error);
      }
    })
    .post(async (req, res, next) => {
      try {
        const createCompanieReqObj = model.buildCreateCompanieReq(req.body);
        const response = await controller.addIntoDatabase(
          `"Companii"(nume,numar_inregistrare,nisa_id,marime_companie_id,activitate_companie_id,vanzari_totale,adresa_livrare,adresa_facturare,numar_angajati,cifra_afaceri,locatie_gps,angajat_responsabil,punct_lucru_id,email,numar_telefon) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)`,
          [
            createCompanieReqObj.getNume(),
            createCompanieReqObj.getNumarInregistrare(),
            createCompanieReqObj.getNisa(),
            createCompanieReqObj.getMarimeCompanie(),
            createCompanieReqObj.getActivitateCompanie(),
            createCompanieReqObj.getVanzariTotale(),
            createCompanieReqObj.getAdresaLivrare(),
            createCompanieReqObj.getAdresaFacturare(),
            createCompanieReqObj.getNumarAngajati(),
            createCompanieReqObj.getCifraAfaceri(),
            createCompanieReqObj.getLocatieGps(),
            createCompanieReqObj.getAngajatResponsabil(),
            createCompanieReqObj.getPunctLucruId(),
            createCompanieReqObj.getEmail(),
            createCompanieReqObj.getNumarTelefon(),
          ]
        );
        res.status(200).send("Companie adaugata cu success");
      } catch (error) {
        next(error);
      }
    })
    .patch(async (req, res, next) => {
      try {
        const updateCompanieReqObj = model.buildUpdateCompanieReq(req.body);
        const response = await controller.updateOneObject(
          `"Companii" SET nume = $1,numar_inregistrare=$2, nisa_id=$3, marime_companie_id=$4, activitate_companie_id=$5, vanzari_totale=$6,adresa_livrare=$7,adresa_facturare=$8,numar_angajati =$9,cifra_afaceri=$10,locatie_gps=$11, angajat_responsabil=$12 ,punct_lucru_id=$13`,
          "companie_id",
          updateCompanieReqObj.getCompanieId(),
          [
            updateCompanieReqObj.getNume(),
            updateCompanieReqObj.getNumarInregistrare(),
            updateCompanieReqObj.getNisa(),
            updateCompanieReqObj.getMarimeCompanie(),
            updateCompanieReqObj.getActivitateCompanie(),
            updateCompanieReqObj.getVanzariTotale(),
            updateCompanieReqObj.getAdresaLivrare(),
            updateCompanieReqObj.getAdresaFacturare(),
            updateCompanieReqObj.getNumarAngajati(),
            updateCompanieReqObj.getCifraAfaceri(),
            updateCompanieReqObj.getLocatieGps(),
            updateCompanieReqObj.getAngajatResponsabil(),
            updateCompanieReqObj.getPunctLucruId(),
          ]
        );
        res.status(200).send("Companie updatata cu success");
      } catch (error) {
        next(error);
      }
    })
    .delete(async (req, res, next) => {
      try {
        const deleteCompanieReqObj = model.buildDeleteCompanieReq(req.body);
        const response = await controller.deleteFromDatabase(
          '"Companii"',
          "companie_id",
          deleteCompanieReqObj.getCompanieId()
        );
        res.status(200).send("Companie stearsa cu succes");
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

      const response = await controller.getObjectsPagination(
        '"Companii"',
        paginationObject.getLimita(),
        paginationObject.getLastId(),
        "companie_id"
      );
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  });
  router.route("/leads").get(async (req, res, next) => {
    try {
      res.status(200).send("test leads");
    } catch (error) {
      next(error);
    }
  });

  router
    .route("/activitate_companii")
    .get(async (req, res, next) => {
      try {
        const readActiuneCompanieReqObject =
          model.buildReadActivitateCompanieReq({
            activitate_companie_id: req.query.activitate_companie_id,
          });
        const response = await controller.getObject(
          '"Activitate companii"',
          "activitate_companie_id",
          readActiuneCompanieReqObject.getActivitateCompanieId()
        );
        res.status(200).send(response);
      } catch (error) {
        next(error);
      }
    })
    .post(async (req, res, next) => {
      try {
        const createActivitateCompanieReqObj =
          model.buildCreateActivitateCompanieReq(req.body);
        const response = await controller.addIntoDatabase(
          `"Activitate companii"( activitate_companie) VALUES($1)`,
          [createActivitateCompanieReqObj.getActivitateCompanie()]
        );
        res.status(200).send("Activitate companie adaugata cu succes");
      } catch (error) {
        next(error);
      }
    })
    .patch(async (req, res, next) => {
      try {
        const updateActivitateCompanieReqObj =
          model.buildUpdateActivitateCompanieReq(req.body);

        const response = await controller.updateOneObject(
          `"Activitate companii" SET activitate_companie = $1`,
          "activitate_companie_id",
          updateActivitateCompanieReqObj.getActivitateCompanieId(),
          [updateActivitateCompanieReqObj.getActivitateCompanie()]
        );
        res.status(200).send("Activitate companie s-a updatat cu succes");
      } catch (error) {
        next(error);
      }
    })
    .delete(async (req, res, next) => {
      try {
        const deleteActivitateCompanieReqObject =
          model.buildDeleteActivitateCompanieReq(req.body);
        const response = await controller.deleteFromDatabase(
          '"Activitate companii"',
          "activitate_companie_id",
          deleteActivitateCompanieReqObject.getActivitateCompanieId()
        );
        res.status(200).send("Activitate companie stearsa cu succes");
      } catch (error) {
        next(error);
      }
    });
  router.route("/activitate_companii/getAll").get(async (req, res, next) => {
    try {
      const response = await controller.getAllObjects('"Activitate companii"');
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  });
  router
    .route("/marime_companii")
    .get(async (req, res, next) => {
      try {
        const readMarimeCompanieReqObject = model.buildReadMarimeCompanieReq({
          marime_companie_id: req.query.marime_companie_id,
        });
        const response = await controller.getObject(
          '"Marimi companii"',
          "marime_companie_id",
          readMarimeCompanieReqObject.getMarimeCompanieId()
        );
        res.status(200).send(response);
      } catch (error) {
        next(error);
      }
    })
    .post(async (req, res, next) => {
      try {
        const createMarimeCompanieReqObj = model.buildCreateMarimeCompanieReq(
          req.body
        );
        const response = await controller.addIntoDatabase(
          `"Marimi companii"(marime_companie) VALUES($1)`,
          [createMarimeCompanieReqObj.getMarimeCompanie()]
        );
        res.status(200).send("Marime companie adaugata cu succes");
      } catch (error) {
        next(error);
      }
    })
    .patch(async (req, res, next) => {
      try {
        const updateMarimeCompanieReqObj = model.buildUpdateMarimeCompanieReq(
          req.body
        );
        const response = await controller.updateOneObject(
          `"Marimi companii" SET marime_companie = $1`,
          "marime_companie_id",
          updateMarimeCompanieReqObj.getMarimeCompanieId(),
          [updateMarimeCompanieReqObj.getMarimeCompanie()]
        );
        res.status(200).send("Marime companie updatata cu succes");
      } catch (error) {
        next(error);
      }
    })
    .delete(async (req, res, next) => {
      try {
        const deleteMarimeCompanieReqObject =
          model.buildDeleteMarimeCompanieReq(req.body);
        const response = await controller.deleteFromDatabase(
          '"Marimi companii"',
          "marime_companie_id",
          deleteMarimeCompanieReqObject.getMarimeCompanieId()
        );
        res.status(200).send("Marime companie stearsa cu succes");
      } catch (error) {
        next(error);
      }
    });
  router.route("/marime_companii/getAll").get(async (req, res, next) => {
    try {
      const response = await controller.getAllObjects('"Marimi companii"');
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  });
  return router;
};
