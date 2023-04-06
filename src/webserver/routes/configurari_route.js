const express = require("express");

module.exports = function configurariRoute(controller, model) {
  const router = express.Router();

  router.route("/").get(async (req, res, next) => {
    try {
      res.status(200).send("test configurare");
    } catch (error) {
      next(error);
    }
  });

  router.route("/tipActiune").get(async (req, res, next) => {
    try {
      res.status(200).send("test get tip actiune");
    } catch (error) {
      next(error);
    }
  });

  router.route("/tipRezultat").get(async (req, res, next) => {
    try {
      res.status(200).send("test get rezultate disponibile");
    } catch (error) {
      next(error);
    }
  });
  return router;
};
