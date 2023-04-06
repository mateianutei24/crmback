const express = require("express");

module.exports = function obiectiveRoute(controller, model) {
  const router = express.Router();

  router
    .route("/")
    .get(async (req, res, next) => {
      try {
        res.status(200).send("test obiective");
      } catch (error) {
        next(error);
      }
    })
    .post(async (req, res, next) => {
      try {
        res.status(200).send("test obiective");
      } catch (error) {
        next(error);
      }
    })
    .patch(async (req, res, next) => {
      try {
        res.status(200).send("test obiective");
      } catch (error) {
        next(error);
      }
    })
    .delete(async (req, res, next) => {
      try {
        res.status(200).send("test obiective");
      } catch (error) {
        next(error);
      }
    });

  router.route("/getAll").get(async (req, res, next) => {
    try {
      const response = await controller.getAllObjects('"Obiective"');
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  });

  router
    .route("/tip_obiectiv")
    .get(async (req, res, next) => {
      try {
        res.status(200).send("test obiective");
      } catch (error) {
        next(error);
      }
    })
    .post(async (req, res, next) => {
      try {
        res.status(200).send("test obiective");
      } catch (error) {
        next(error);
      }
    })
    .patch(async (req, res, next) => {
      try {
        res.status(200).send("test obiective");
      } catch (error) {
        next(error);
      }
    })
    .delete(async (req, res, next) => {
      try {
        res.status(200).send("test obiective");
      } catch (error) {
        next(error);
      }
    });

  router.route("/tip_obiectiv/getAll").get(async (req, res, next) => {
    try {
      res.status(200).send("test obiective");
    } catch (error) {
      next(error);
    }
  });
  return router;
};
