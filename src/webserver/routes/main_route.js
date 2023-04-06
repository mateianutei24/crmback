const express = require("express");

module.exports = function mainRoute(controller, model) {
  const router = express.Router();

  router.route("/").get(async (req, res, next) => {
    try {
      res.status(200).send("test endpoint");
    } catch (error) {
      next(error);
    }
  });

  return router;
};
