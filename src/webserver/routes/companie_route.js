const express = require("express");

module.exports = function companieRoute(useCases, model) {
  const router = express.Router();

  router
    .route("/")
    .get(async (req, res, next) => {
      try {
        const readCompanieReqObj = model.buildReadCompanieReq({
          companie_id: req.query.companie_id,
        });
        const response = await useCases.readCompanieUseCase(readCompanieReqObj);
        res.status(200).send(response);
      } catch (error) {
        next(error);
      }
    })
    .post(async (req, res, next) => {
      try {
        const createCompanieReqObj = model.buildCreateCompanieReq(req.body);
        const response = await useCases.addCompanieUseCase(
          createCompanieReqObj
        );
        res.status(200).send("Companie adaugata cu success");
      } catch (error) {
        next(error);
      }
    })
    .patch(async (req, res, next) => {
      try {
        const updateCompanieReqObj = model.buildUpdateCompanieReq(req.body);
        const response = await useCases.updateCompanieUseCase(
          updateCompanieReqObj
        );
        res.status(200).send("Companie updatata cu success");
      } catch (error) {
        next(error);
      }
    })
    .delete(async (req, res, next) => {
      try {
        const deleteCompanieReqObj = model.buildDeleteCompanieReq(req.body);
        const response = useCases.deleteCompanieUseCase(deleteCompanieReqObj);
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

      const response = await useCases.getCompaniiPaginationUseCase(
        paginationObject
      );
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  });

  router
    .route("/leads")
    .get(async (req, res, next) => {
      try {
        const getLeadReqObject = model.buildReadLeadReq({
          lead_id: req.query.lead_id,
        });
        const response = await useCases.readLeadUseCase(getLeadReqObject);
        res.status(200).send(response);
      } catch (error) {
        next(error);
      }
    })
    .post(async (req, res, next) => {
      try {
        const addLeadReqObj = model.buildCreateLeadReq(req.body);
        const response = await useCases.addLeadUseCase(addLeadReqObj);
        res.status(200).send("lead added succesfully");
      } catch (error) {
        next(error);
      }
    })
    .patch(async (req, res, next) => {
      try {
        const updateLeadReqObj = model.buildUpdateLeadReq(req.body);
        const response = await useCases.updateLeadUseCase(updateLeadReqObj);
        res.status(200).send("Lead updated succesfully");
      } catch (error) {
        next(error);
      }
    })
    .delete(async (req, res, next) => {
      try {
        const deleteLeadReqObj = model.buildDeleteLeadReq(req.body);
        const response = await useCases.deleteLeadUseCase(deleteLeadReqObj);
        res.status(200).send("Lead deleted succesfully");
      } catch (error) {
        next(error);
      }
    });

  router.route("/leads/pagination").get(async (req, res, next) => {
    try {
      const paginationObject = model.buildPaginationReq({
        limita: parseInt(req.query.limita),
        last_id: req.query.last_id,
      });
      const response = await useCases.getLeadsPaginationUseCase(
        paginationObject
      );
      res.status(200).send(response);
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
        const response = await useCases.getActivitateCompanieUseCase(
          readActiuneCompanieReqObject
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
        const response = await useCases.addActivitateCompanieUseCase(
          createActivitateCompanieReqObj
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

        const response = await useCases.updateActivitateCompanieUseCase(
          updateActivitateCompanieReqObj
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
        const response = await useCases.deleteActivitateCompanieUseCase(
          deleteActivitateCompanieReqObject
        );
        res.status(200).send("Activitate companie stearsa cu succes");
      } catch (error) {
        next(error);
      }
    });
  router
    .route("/activitate_companii/pagination")
    .get(async (req, res, next) => {
      try {
        const paginationObject = model.buildPaginationReq({
          limita: parseInt(req.query.limita),
          last_id: req.query.last_id,
        });

        const response = await useCases.getActivitatiCompaniePaginationUseCase(
          paginationObject
        );
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
        const response = await useCases.readMarimeCompanieUseCase(
          readMarimeCompanieReqObject
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
        const response = await useCases.addMarimeCompanieUseCase(
          createMarimeCompanieReqObj
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
        const response = await useCases.updateMarimeCompanieUseCase(
          updateMarimeCompanieReqObj
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
        const response = await useCases.deleteMarimeCompanieUseCase(
          deleteMarimeCompanieReqObject
        );
        res.status(200).send("Marime companie stearsa cu succes");
      } catch (error) {
        next(error);
      }
    });
  router.route("/marime_companii/pagination").get(async (req, res, next) => {
    try {
      const paginationObject = model.buildPaginationReq({
        limita: parseInt(req.query.limita),
        last_id: req.query.last_id,
      });
      const response = await useCases.getMarimiCompaniePaginationUseCase(
        paginationObject
      );
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  });
  return router;
};
