const express = require("express");

module.exports = function angajatRoute(useCases, model) {
  const router = express.Router();

  router
    .route("/")
    .get(async (req, res, next) => {
      try {
        const readAngajatReqObj = model.buildReadAngajatReq({
          angajat_id: req.query.angajat_id,
        });

        const response = await useCases.readAngajatUseCase(readAngajatReqObj);
        res.status(200).send(response);
      } catch (error) {
        next(error);
      }
    })
    .post(async (req, res, next) => {
      try {
        const createAngajatReqObj = model.buildCreateAngajatReq(req.body);

        const response = await useCases.addAngajatUseCase(createAngajatReqObj);
        res.status(200).send("Angajat adaugat cu succes");
      } catch (error) {
        next(error);
      }
    })
    .delete(async (req, res, next) => {
      try {
        const deleteAngajatReqObj = model.buildReadAngajatReq(req.body);

        res.status(200).send("Angajat sters cu succes");
        console.log(deleteAngajatReqObj);
        const response = await useCases.deleteAngajatUseCase(
          deleteAngajatReqObj
        );
      } catch (error) {
        next(error);
      }
    })
    .patch(async (req, res, next) => {
      try {
        const updateAngajatReqObj = model.buildUpdateAngajatReq(req.body);

        const response = await useCases.updateAngajatUseCase(
          updateAngajatReqObj
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
  router.route("/pagination").get(async (req, res, next) => {
    try {
      const paginationObject = model.buildPaginationReq({
        limita: parseInt(req.query.limita),
        last_id: req.query.last_id,
      });

      const response = await useCases.getAngajatiPaginationUseCase(
        paginationObject
      );
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
        const response = await useCases.readTipAngajatUseCase(
          readTipAngajatReqObj
        );
        res.status(200).send(response);
      } catch (error) {
        next(error);
      }
    })
    .post(async (req, res, next) => {
      try {
        const createTipAngajatReqObj = model.buildCreateTipAngajatReq(req.body);
        const response = await useCases.addTipAngajatUseCase(
          createTipAngajatReqObj
        );
        res.status(200).send("Tip angajat adaugat cu succes");
      } catch (error) {
        next(error);
      }
    })
    .delete(async (req, res, next) => {
      try {
        const deleteTipAngajatReqObj = model.buildDeleteTipAngajatReq(req.body);
        const response = await useCases.deleteTipAngajatUseCase(
          deleteTipAngajatReqObj
        );
        res.status(200).send("Tip angajat sters cu succes");
      } catch (error) {
        next(error);
      }
    })
    .patch(async (req, res, next) => {
      try {
        const updateTipAngajatReqObj = model.buildUpdateTipAngajatReq(req.body);
        const response = await useCases.updateTipAngajatUseCase(
          updateTipAngajatReqObj
        );
        res.status(200).send("Tip angajat updatat cu succes");
      } catch (error) {
        next(error);
      }
    });

  router.route("/tip/pagination").get(async (req, res, next) => {
    const paginationObject = model.buildPaginationReq({
      limita: parseInt(req.query.limita),
      last_id: req.query.last_id,
    });
    const response = await useCases.getTipuriAngajatiPaginationUseCase(
      paginationObject
    );
    res.status(200).send(response);
  });

  router
    .route("/functie")
    .get(async (req, res, next) => {
      try {
        const readFunctieAngajatReqObj = model.buildReadFunctieAngajatReq({
          functie_angajat_id: req.query.functie_angajat_id,
        });

        const response = await useCases.readFunctieAngajatUseCase(
          readFunctieAngajatReqObj
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

        const response = await useCases.addFunctieAngajatUseCase(
          createFunctieAngajatReqObject
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

        const response = await useCases.deleteFunctieAngajatUseCase(
          deleteFunctieAngajatReqObj
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

        const response = await useCases.updateFunctieAngajatUseCase(
          updateFunctieAngajatReqObj
        );
        res.status(200).send("Tip angajat updatat cu succes");
      } catch (error) {
        next(error);
      }
    });
  router.route("/functie/pagination").get(async (req, res, next) => {
    try {
      const paginationObject = model.buildPaginationReq({
        limita: parseInt(req.query.limita),
        last_id: req.query.last_id,
      });
      const response = await useCases.getFunctiiAngajatiPaginationUseCase(
        paginationObject
      );
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  });
  return router;
};
