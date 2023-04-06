const express = require("express");

module.exports = function actiuniRoute(controller, model) {
  const router = express.Router();

  router
    .route("/")
    .get(async (req, res, next) => {
      try {
        res.status(200).send("test actiuni");
      } catch (error) {
        next(error);
      }
    })
    .post(async (req, res, next) => {
      try {
        const createActiuneReqObject = model.buildCreateActiuneReq(req.body);
        const response = await controller.addIntoDatabase(
          "Actiuni(actiune_id,tip_actiune,status,receptor_id,emitator_id,descriere,data_creare_initiala,data_emitere,due_data,oportunitate_id)",
          [
            "DEFAULT",
            createActiuneReqObject.getTipActiune(),
            createActiuneReqObject.getStatus(),
            createActiuneReqObject.getReceptorId(),
            createActiuneReqObject.getEmitatorId(),
            createActiuneReqObject.getDescriere(),
            createActiuneReqObject.getDataCreareInitiala(),
            createActiuneReqObject.getDataEmitere(),
            createActiuneReqObject.getDataLimita(),
            createActiuneReqObject.getOportunitateId(),
          ]
        );
        res.status(200).send("test test");
      } catch (error) {
        next(error);
      }
    });

  router
    .route("/tip_rezultat")
    .get(async (req, res, next) => {
      try {
        const readTipRezultatActiuneReqObject =
          model.buildReadTipRezultatActiuneReq({
            tip_rezultat_id: req.query.tip_rezultat_id,
          });
        const response = await controller.getObject(
          '"Tipuri Rezultat"',
          "tip_rezultat_id",
          readTipRezultatActiuneReqObject.getTipRezultatActiuneId()
        );
        res.status(200).send(response);
      } catch (error) {
        next(error);
      }
    })
    .post(async (req, res, next) => {
      try {
        const createTipRezultatActiuneReqObject =
          model.buildCreateTipRezultatActiuneReq(req.body);
        const response = await controller.addIntoDatabase(
          `"Tipuri Rezultat"(tip_rezultat) VALUES($1)`,
          [createTipRezultatActiuneReqObject.getNumeTipRezultatActiune()]
        );
        res.status(200).send("Tip Rezultat Adaugat");
      } catch (error) {
        next(error);
      }
    })
    .delete(async (req, res, next) => {
      try {
        const deleteTipRezultatActiuneReqObject =
          model.buildDeleteTipRezultatActiuneReq(req.body);
        const response = await controller.deleteFromDatabase(
          '"Tipuri Rezultat"',
          "tip_rezultat_id",
          deleteTipRezultatActiuneReqObject.getTipRezultatActiuneId()
        );
        res.status(200).send("Tip rezultat sters cu succes");
      } catch (error) {
        next(error);
      }
    })
    .patch(async (req, res, next) => {
      try {
        const updateTipRezultatActiuneReqObject =
          model.buildUpdateTipRezultatActiuneReq(req.body);
        const response = await controller.updateOneObject(
          `"Tipuri Rezultat" SET tip_rezultat =$1`,
          "tip_rezultat_id",
          updateTipRezultatActiuneReqObject.getTipRezultatActiuneId(),
          [updateTipRezultatActiuneReqObject.getNumeTipRezultatActiune()]
        );
        res.status(200).send("Tip rezultat updatat cu succes");
      } catch (error) {
        next(error);
      }
    });

  router.route("/tip_rezultat/getAll").get(async (req, res, next) => {
    try {
      const response = await controller.getAllObjects('"Tipuri Rezultat"');
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  });

  router.route("/rezultate").get(async (req, res, next) => {
    try {
      res.status(200).send("test rezultatele unei actiuni");
    } catch (error) {
      next(error);
    }
  });

  router
    .route("/tip_actiune")
    .get(async (req, res, next) => {
      try {
        const readTipActiuneReqObject = model.buildReadTipActiuneReq({
          tip_actiune_id: req.query.tip_actiune_id,
        });
        const response = await controller.getObject(
          '"Tipuri Actiune"',
          "tip_actiune_id",
          readTipActiuneReqObject.getTipActiuneId()
        );
        res.status(200).send(response);
      } catch (error) {
        next(error);
      }
    })
    .post(async (req, res, next) => {
      try {
        const createTipActiuneReqObject = model.buildCreateTipActiuneReq(
          req.body
        );
        const response = await controller.addIntoDatabase(
          `"Tipuri Actiune"(tip_actiune,timp_executie) VALUES($1,$2)`,
          [
            createTipActiuneReqObject.getNumeTipActiune(),
            createTipActiuneReqObject.getTimpExecutie(),
          ]
        );
        res.status(200).send("Tip Actiune adaugat");
      } catch (error) {
        next(error);
      }
    })
    .delete(async (req, res, next) => {
      try {
        const deleteTipActiuneReqObject = model.buildDeleteTipActiuneReq(
          req.body
        );
        const response = await controller.deleteFromDatabase(
          '"Tipuri Actiune"',
          "tip_actiune_id",
          deleteTipActiuneReqObject.getTipActiuneId()
        );
        res.status(200).send("Tip Actiune sters cu success");
      } catch (error) {
        next(error);
      }
    })
    .patch(async (req, res, next) => {
      try {
        const updateTipActiuneReqObject = model.buildUpdateTipActiuneReq(
          req.body
        );
        const response = await controller.updateOneObject(
          `"Tipuri Actiune" SET tip_actiune =$1, timp_executie = $2 `,
          "tip_actiune_id",
          updateTipActiuneReqObject.getTipActiuneId(),
          [
            updateTipActiuneReqObject.getNumeTipActiune(),
            updateTipActiuneReqObject.getTimpExecutie(),
          ]
        );
        res.status(200).send("Tip Actiune updatat cu success");
      } catch (error) {
        next(error);
      }
    });

  router.route("/tip_actiune/getAll").get(async (req, res, next) => {
    try {
      const response = await controller.getAllObjects('"Tipuri Actiune"');
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  });

  router
    .route("/matchTipActiuneTipRezultat")
    .get(async (req, res, next) => {
      try {
        const readMatchTipActiuneTipRezultatObj =
          model.buildMatchTipRezultatTipActiune({
            tip_actiune_id: req.query.tip_actiune_id,
            tip_rezultat_id: req.query.tip_rezultat_id,
          });
        const response = await controller.performQuery(
          `SELECT * FROM "Rezultate_Actiuni" WHERE (tip_rezultat_id= $1 AND tip_actiune_id= $2)`,
          [
            readMatchTipActiuneTipRezultatObj.getTipRezultatId(),
            readMatchTipActiuneTipRezultatObj.getTipActiuneId(),
          ]
        );
        res.status(200).send(response);
      } catch (error) {
        next(error);
      }
    })
    .post(async (req, res, next) => {
      try {
        const createMatchTipActiuneTipRezultatObj =
          model.buildMatchTipRezultatTipActiune(req.body);
        const response = await controller.performQuery(
          `INSERT INTO "Rezultate_Actiuni"(tip_actiune_id,tip_rezultat_id) VALUES($1,$2)`,
          [
            createMatchTipActiuneTipRezultatObj.getTipActiuneId(),
            createMatchTipActiuneTipRezultatObj.getTipRezultatId(),
          ]
        );
        res.status(200).send("Match ul s-a produs cu succes");
      } catch (error) {
        next(error);
      }
    })

    .delete(async (req, res, next) => {
      try {
        const readMatchTipActiuneTipRezultatObj =
          model.buildMatchTipRezultatTipActiune(req.body);
        const response = await controller.performQuery(
          `DELETE FROM "Rezultate_Actiuni" WHERE (tip_rezultat_id= $1 AND tip_actiune_id= $2)`,
          [
            readMatchTipActiuneTipRezultatObj.getTipRezultatId(),
            readMatchTipActiuneTipRezultatObj.getTipActiuneId(),
          ]
        );
        res.status(200).send(response);
      } catch (error) {
        next(error);
      }
    });

  router
    .route("/status")
    .get(async (req, res, next) => {
      try {
        const readStatusActiuneObj = model.buildReadStatusActiuneReq({
          status_actiune_id: req.query.status_actiune_id,
        });
        const response = await controller.getObject(
          '"Status Actiuni"',
          "status_actiune_id",
          readStatusActiuneObj.getStatusActiuneId()
        );
        res.status(200).send(response);
      } catch (error) {
        next(error);
      }
    })
    .post(async (req, res, next) => {
      try {
        const createStatusActiuneObj = model.buildCreateStatusActiuneReq(
          req.body
        );
        const response = await controller.addIntoDatabase(
          `"Status Actiuni"(nume_status_actiune) VALUES($1)`,
          [createStatusActiuneObj.getNumeStatusActiune()]
        );
        res.status(200).send("Statusul a fost adaugat cu succes");
      } catch (error) {
        next(error);
      }
    })
    .patch(async (req, res, next) => {
      try {
        const updateStatusActiuneReqObject = model.buildUpdateStatusActiuneReq(
          req.body
        );
        const response = await controller.updateOneObject(
          `"Status Actiuni" SET nume_status_actiune =$1`,
          "status_actiune_id",
          updateStatusActiuneReqObject.getStatusActiuneId(),
          [updateStatusActiuneReqObject.getNumeStatusActiune()]
        );
        res.status(200).send("Status Actiune updatat cu success");
      } catch (error) {
        next(error);
      }
    })
    .delete(async (req, res, next) => {
      try {
        const deleteStatusActiuneObj = model.buildDeleteStatusActiuneReq(
          req.body
        );
        const response = await controller.deleteFromDatabase(
          '"Status Actiuni"',
          "status_actiune_id",
          deleteStatusActiuneObj.getStatusActiuneId()
        );
        res.status(200).send("Status Actiune sters cu success");
      } catch (error) {
        next(error);
      }
    });
  router.route("/status/getAll").get(async (req, res, next) => {
    try {
      const response = await controller.getAllObjects('"Status Actiuni"');
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  });
  return router;
};
