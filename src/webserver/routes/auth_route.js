const express = require("express");

const generatePassword = require("../../auth/utils/generatePassword");
const issueJWT = require("../../auth/utils/issueJWT");
const validPassword = require("../../auth/utils/validatePassword");

module.exports = function authRoute(useCases, model) {
  const router = express.Router();

  router.route("/register").post(async (req, res, next) => {
    try {
      const email = req.body.email;
      const password = req.body.password;

      const saltHash = generatePassword(password);

      const createAngajatAuthJwt = model.buildCreateAngajatAuthJwtReq({
        email: email,
        hash: saltHash.hash,
        salt: saltHash.salt,
      });

      const response = await useCases.addAngajatAuthUseCase(
        createAngajatAuthJwt
      );

      const jwt = issueJWT(email);
      res.json({
        success: true,
        user: email,
        token: jwt.token,
        expiresIn: jwt.expiresIn,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

  router.route("/login").post(async (req, res, next) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const readAngajatReqObj = model.buildReadAngajatReq({
        angajat_id: req.body.email,
      });

      const user = await useCases.getAngajatAuthUseCase(readAngajatReqObj);
      if (!user) {
        var error = new Error("could not find user");
        error.status = 401;
        throw error;
      }

      const isValid = validPassword(req.body.password, user.hash, user.salt);

      if (isValid) {
        const tokenObject = issueJWT(email);
        res.json({
          success: true,
          user: email,
          token: tokenObject.token,
          expiresIn: tokenObject.expiresIn,
        });
      } else {
        var error = new Error("invalid password");
        error.status = 401;
        throw error;
      }
    } catch (error) {
      next(error);
    }
  });
  return router;
};
