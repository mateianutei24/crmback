const express = require("express");

module.exports = function angajatRoute(controller, model) {
  const router = express.Router();

  router
    .route("/")
    .get(async (req, res, next) => {
      try {
        const readAngajatReqObj = model.buildReadAngajatReq({
          angajat_id: req.query.angajat_id,
        });
        const response = await controller.getObject(
          '"Angajati"',
          "angajat_id",
          readAngajatReqObj.getAngajatId()
        );
        res.status(200).send(response);
      } catch (error) {
        next(error);
      }
    })
    .post(async (req, res, next) => {
      try {
        const createAngajatReqObj = model.buildCreateAngajatReq(req.body);
        const response = await controller.addIntoDatabase(
          `"Angajati"(nume,prenume,tip,functie,email,numar_telefon,punct_lucru_id) VALUES($1,$2,$3,$4,$5,$6,$7)`,
          [
            createAngajatReqObj.getNume(),
            createAngajatReqObj.getPrenume(),
            createAngajatReqObj.getTip(),
            createAngajatReqObj.getFunctie(),
            createAngajatReqObj.getEmail(),
            createAngajatReqObj.getNumarTelefon(),
            createAngajatReqObj.getPunctLucruId(),
          ]
        );
        res.status(200).send("Angajat adaugat cu succes");
      } catch (error) {
        next(error);
      }
    })
    .delete(async (req, res, next) => {
      try {
        const deleteAngajatReqObj = model.buildDeleteAngajatReq(req.body);
        const response = await controller.deleteFromDatabase(
          '"Angajati"',
          "angajat_id",
          deleteAngajatReqObj.getAngajatId()
        );
        res.status(200).send("Angajat sters cu succes");
      } catch (error) {
        next(error);
      }
    })
    .patch(async (req, res, next) => {
      try {
        const updateAngajatReqObj = model.buildUpdateAngajatReq(req.body);
        const response = await controller.updateOneObject(
          `"Angajati" SET nume =$2, prenume = $3, tip = $4, functie = $5, email = $6, numar_telefon = $7, punct_lucru_id = $8`,
          "angajat_id",
          updateAngajatReqObj.getAngajatId(),
          [
            updateAngajatReqObj.getNume(),
            updateAngajatReqObj.getPrenume(),
            updateAngajatReqObj.getTip(),
            updateAngajatReqObj.getFunctie(),
            updateAngajatReqObj.getEmail(),
            updateAngajatReqObj.getNumarTelefon(),
            updateAngajatReqObj.getPunctLucruId(),
          ]
        );
        res.status(200).send("Angajat updatat cu succes");
      } catch (error) {
        next(error);
      }
    });
  router.route("/getAll").get(async (req, res, next) => {
    try {
      const response = await controller.getAllObjects('"Angajati"');
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  });

  router
    .route("/tip")
    .get(async (req, res, next) => {
      try {
        const readTipAngajatReqObj = model.buildReadTipAngajatReq({
          tip_angajat_id: req.query.tip_angajat_id,
        });
        const response = await controller.getObject(
          '"Tipuri Angajati"',
          "tip_angajat_id",
          readTipAngajatReqObj.getTipAngajatId()
        );
        res.status(200).send(response);
      } catch (error) {
        next(error);
      }
    })
    .post(async (req, res, next) => {
      try {
        const createTipAngajatReqObj = model.buildCreateTipAngajatReq(req.body);
        const response = await controller.addIntoDatabase(
          `"Tipuri Angajati"(nume_tip_angajat) VALUES($1)`,
          [createTipAngajatReqObj.getNumeTipAngajat()]
        );
        res.status(200).send("Tip angajat adaugat cu succes");
      } catch (error) {
        next(error);
      }
    })
    .delete(async (req, res, next) => {
      try {
        const deleteTipAngajatReqObj = model.buildDeleteTipAngajatReq(req.body);
        const response = await controller.deleteFromDatabase(
          '"Tipuri Angajati"',
          "tip_angajat_id",
          deleteTipAngajatReqObj.getTipAngajatId()
        );
        res.status(200).send("Tip angajat sters cu succes");
      } catch (error) {
        next(error);
      }
    })
    .patch(async (req, res, next) => {
      try {
        const updateTipAngajatReqObj = model.buildUpdateTipAngajatReq(req.body);
        const response = await controller.updateOneObject(
          `"Tipuri Angajati" SET nume_tip_angajat =$1 `,
          "tip_angajat_id",
          updateTipAngajatReqObj.getTipAngajatId(),
          [updateTipAngajatReqObj.getNumeTipAngajat()]
        );
        res.status(200).send("Tip angajat updatat cu succes");
      } catch (error) {
        next(error);
      }
    });

  router.route("/tip/getAll").get(async (req, res, next) => {
    const response = await controller.getAllObjects('"Tipuri Angajati"');
    res.status(200).send(response);
  });
  router
    .route("/functie")
    .get(async (req, res, next) => {
      try {
        const readFunctieAngajatReqObj = model.buildReadFunctieAngajatReq({
          functie_angajat_id: req.query.functie_angajat_id,
        });
        const response = await controller.getObject(
          '"Functii Angajati"',
          "functie_angajat_id",
          readFunctieAngajatReqObj.getFunctieAngajatId()
        );
        res.status(200).send(response);
      } catch (error) {
        next(error);
      }
    })
    .post(async (req, res, next) => {
      try {
        const createFunctieAngajatReqObject =
          model.buildCreateFunctieAngajatReq(req.body);
        const response = await controller.addIntoDatabase(
          `"Functii Angajati"(nume_functie_angajat) VALUES($1)`,
          [createFunctieAngajatReqObject.getNumeFunctieAngajat()]
        );
        res.status(200).send("Functie angajat  adaugata cu succes");
      } catch (error) {
        next(error);
      }
    })
    .delete(async (req, res, next) => {
      try {
        const deleteFunctieAngajatReqObj = model.buildDeleteFunctieAngajatReq(
          req.body
        );
        const response = await controller.deleteFromDatabase(
          '"Functii Angajati"',
          "functie_angajat_id",
          deleteFunctieAngajatReqObj.getFunctieAngajatId()
        );
        res.status(200).send("Functie angajat stearsa cu succes");
      } catch (error) {
        next(error);
      }
    })
    .patch(async (req, res, next) => {
      try {
        const updateFunctieAngajatReqObj = model.buildUpdateFunctieAngajatReq(
          req.body
        );
        const response = await controller.updateOneObject(
          `"Functii Angajati" SET nume_functie_angajat =$1 `,
          "functie_angajat_id",
          updateFunctieAngajatReqObj.getFunctieAngajatId(),
          [updateFunctieAngajatReqObj.getNumeFunctieAngajat()]
        );
        res.status(200).send("Tip angajat updatat cu succes");
      } catch (error) {
        next(error);
      }
    });
  router.route("/functie/getAll").get(async (req, res, next) => {
    try {
      const response = await controller.getAllObjects('"Functii Angajati"');
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  });
  return router;
};
