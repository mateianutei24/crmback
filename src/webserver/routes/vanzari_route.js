const express = require("express");

module.exports = function vanzariRoute(controller, model) {
  const router = express.Router();

  router.route("/").get(async (req, res, next) => {
    try {
      res.status(200).send("test vanzari");
    } catch (error) {
      next(error);
    }
  });

  return router;
};
