const express = require("express");

module.exports = function produseRoute(controller, model) {
  const router = express.Router();

  router.route("/").get(async (req, res, next) => {
    try {
      res.status(200).send("test produse");
    } catch (error) {
      next(error);
    }
  });

  return router;
};
