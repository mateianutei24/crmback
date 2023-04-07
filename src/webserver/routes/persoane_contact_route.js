const express = require("express");

module.exports = function persoaneContactRoute(controller, model) {
  const router = express.Router();

  router.route("/").get(async (req, res, next) => {
    try {
      res.status(200).send("test persoane contact");
    } catch (error) {
      next(error);
    }
  });

  return router;
};
