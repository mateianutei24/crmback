const fs = require("fs");
const path = require("path");

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

module.exports = function configurePassportStrategy(useCases, model) {
  const pathToKey = path.join(__dirname, "..", "id.rsa.pub.pem");
  const PUB_KEY = fs.readFileSync(pathToKey, "utf8");

  const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY,
    algorithms: ["RS256"],
  };

  const strategy = new JwtStrategy(options, (payload, done) => {
    const readAngajatReqObj = model.buildReadAngajatReq({
      angajat_id: payload.sub,
    });
    useCases
      .getAngajatAuthUseCase(readAngajatReqObj)
      .then((user) => {
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      })
      .catch((err) => done(err, null));
  });

  // implement useCases.getOneUser() for the Auth collection

  return function (passport) {
    passport.use(strategy);
  };
};
