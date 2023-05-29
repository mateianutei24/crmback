const express = require("express");
const useCases = require("../../useCases/useCases");

module.exports = function actiuniRoute(useCases, model) {
  const router = express.Router();

  router
    .route("/")
    .get(async (req, res, next) => {
      try {
        const getActiuneReqObj = model.buildReadActiuneReq({
          actiune_id: req.query.actiune_id,
        });
        const response = await useCases.readActiuneUseCase(getActiuneReqObj);
        res.status(200).send(response);
      } catch (error) {
        next(error);
      }
    })
    .post(async (req, res, next) => {
      try {
        const createActiuneReqObject = model.buildCreateActiuneReq(req.body);
        const response = await useCases.addActiuneUseCase(
          createActiuneReqObject
        );
        res.status(200).send("Added actiune succesfully");
      } catch (error) {
        next(error);
      }
    })
    .patch(async (req, res, next) => {
      try {
        const updateActiuneReqObject = model.buildUpdateActiuneReq(req.body);
        const response = await useCases.updateActiuneUseCase(
          updateActiuneReqObject
        );
        res.status(200).send("Actiune updated succesfully");
      } catch (error) {
        next(error);
      }
    })
    .delete(async (req, res, next) => {
      try {
        const deleteActiuneReqObject = model.buildDeleteActiuneReq(req.body);
        const response = await useCases.deleteActiuneUseCase(
          deleteActiuneReqObject
        );
        res.status(200).send("Deleted actiune succesfully");
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
      const response = await useCases.getActiuniPaginationUseCase(
        paginationObject
      );
      res.status(200).send(response);
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
        const response = await useCases.getTipRezultatUseCase(
          readTipRezultatActiuneReqObject
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
        await useCases.addTipRezultatUseCase(createTipRezultatActiuneReqObject);
        res.status(200).send("Tip Rezultat Adaugat");
      } catch (error) {
        next(error);
      }
    })
    .delete(async (req, res, next) => {
      try {
        const deleteTipRezultatActiuneReqObject =
          model.buildDeleteTipRezultatActiuneReq(req.body);
        const response = await useCases.deleteTipRezultatUseCase(
          deleteTipRezultatActiuneReqObject
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
        const response = await useCases.updateTipRezultatUseCase(
          updateTipRezultatActiuneReqObject
        );
        res.status(200).send("Tip rezultat updatat cu succes");
      } catch (error) {
        next(error);
      }
    });

  router.route("/tip_rezultat/pagination").get(async (req, res, next) => {
    try {
      const paginationObject = model.buildPaginationReq({
        limita: parseInt(req.query.limita),
        last_id: req.query.last_id,
      });
      const response = await useCases.getTipuriRezultatePaginationUseCase(
        paginationObject
      );
      res.status(200).send(response);
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
        const response = await useCases.readTipActiuneUseCase(
          readTipActiuneReqObject
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

        const response = await useCases.addTipActiuneUseCase(
          createTipActiuneReqObject
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

        const response = await useCases.deleteTipActiuneUseCase(
          deleteTipActiuneReqObject
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
        const response = await useCases.updateTipActiuneUseCase(
          updateTipActiuneReqObject
        );

        res.status(200).send("Tip Actiune updatat cu success");
      } catch (error) {
        next(error);
      }
    });

  router.route("/tip_actiune/pagination").get(async (req, res, next) => {
    try {
      const paginationObject = model.buildPaginationReq({
        limita: parseInt(req.query.limita),
        last_id: req.query.last_id,
      });

      const response = await useCases.getTipuriActiuniPaginationUseCase(
        paginationObject
      );
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
        const response = await useCases.getRezultatPosibilActiuneUseCase(
          readMatchTipActiuneTipRezultatObj
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
        const response = await useCases.addRezultatPosibilActiuneUseCase(
          createMatchTipActiuneTipRezultatObj
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
        const response = await useCases.deleteRezultatPosibilActiuneUseCase(
          readMatchTipActiuneTipRezultatObj
        );
        res.status(200).send(response);
      } catch (error) {
        next(error);
      }
    });

  router
    .route("/matchTipActiuneTipRezultat/pagination")
    .get(async (req, res, next) => {
      const paginationObject = model.buildPaginationReq({
        limita: parseInt(req.query.limita),
        last_id: req.query.last_id,
      });

      const response =
        await useCases.getRezultatePosibileActiuniPaginationUseCase(
          paginationObject
        );
      res.status(200).send(response);
    });

  router
    .route("/matchTipActiuneTipRezultat/getAllResultsForAction/pagination")
    .get(async (req, res, next) => {
      const readTipActiuneReqObject = model.buildReadTipActiuneReq({
        tip_actiune_id: req.query.tip_actiune_id,
      });
      const paginationObject = model.buildPaginationReq({
        limita: parseInt(req.query.limita),
        last_id: req.query.last_id,
      });

      const response = await useCases.getRezultatePosibileActiuneUseCase({
        paginationObject,
        readTipActiuneReqObject,
      });
      res.status(200).send(response);
    });

  router
    .route("/status")
    .get(async (req, res, next) => {
      try {
        const readStatusActiuneObj = model.buildReadStatusActiuneReq({
          status_actiune_id: req.query.status_actiune_id,
        });
        const response = await useCases.readStatusActiuneUseCase(
          readStatusActiuneObj
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
        const response = await useCases.addStatusActiuneUseCase(
          createStatusActiuneObj
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
        const response = await useCases.updateStatusActiuneUseCase(
          updateStatusActiuneReqObject
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
        const response = await useCases.deleteStatusActiuneUseCase(
          deleteStatusActiuneObj
        );
        res.status(200).send("Status Actiune sters cu success");
      } catch (error) {
        next(error);
      }
    });
  router.route("/status/pagination").get(async (req, res, next) => {
    try {
      const paginationObject = model.buildPaginationReq({
        limita: parseInt(req.query.limita),
        last_id: req.query.last_id,
      });
      const response = await useCases.getStatusuriActiunePaginationUseCase(
        paginationObject
      );
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  });

  router
    .route("/results")
    .get(async (req, res, next) => {
      try {
        const getResultReqObj = model.buildReadRezultatActiuneReq({
          rezultat_id: req.query.rezultat_id,
        });
        const response = await useCases.readRezultatUseCase(getResultReqObj);
        res.status(200).send(response);
      } catch (error) {
        next(error);
      }
    })
    .post(async (req, res, next) => {
      try {
        const addResultReqObj = model.buildCreateRezultatActiuneReq(req.body);
        const response = await useCases.addRezultatUseCase(addResultReqObj);
        res.status(200).send("Result updated succesfully");
      } catch (error) {
        next(error);
      }
    })
    .patch(async (req, res, next) => {
      try {
        const updateRezultatReqObj = model.buildUpdateRezultatActiuneReq(
          req.body
        );
        const response = await useCases.updateRezultatUseCase(
          updateRezultatReqObj
        );
        res.status(200).send("Rezultat updated succesfully");
      } catch (error) {
        next(error);
      }
    })
    .delete(async (req, res, next) => {
      try {
        const deleteRezultatReqObject = model.buildDeleteRezultatActiuneReq(
          req.body
        );
        const response = await useCases.deleteRezultatUseCase(
          deleteRezultatReqObject
        );
      } catch (error) {
        next(error);
      }
    });
  router.route("/results/pagination").get(async (req, res, next) => {
    try {
      const paginationObject = model.buildPaginationReq({
        limita: parseInt(req.query.limita),
        last_id: req.query.last_id,
      });
      const response = await useCases.getRezultatePaginationUseCase(
        paginationObject
      );
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  });

  router.route("/results/rezultateForActiune").get(async (req, res, next) => {
    try {
      const paginationObject = model.buildPaginationReq({
        limita: parseInt(req.query.limita),
        last_id: req.query.last_id,
      });
      const getActiuneReqObj = model.buildReadActiuneReq({
        actiune_id: req.query.actiune_id,
      });
      const response = await useCases.getRezultateForActiunePaginationUseCase({
        paginationObject,
        getActiuneReqObj,
      });
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  });
  return router;
};
