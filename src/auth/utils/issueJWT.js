const jsonwebtoken = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");
module.exports = function issueJWT(email) {
  const _id = email;

  const expiresIn = "1d";

  const pathToKey = path.join(__dirname, "..", "id.rsa.piv.pem");
  const PRIV_KEY = fs.readFileSync(pathToKey, "utf8");

  const payload = {
    sub: _id,
    iat: Date.now(),
  };

  const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, {
    expiresIn: expiresIn,
    algorithm: "RS256",
  });

  return {
    token: "Bearer " + signedToken,
    expiresIn: expiresIn,
  };
};
