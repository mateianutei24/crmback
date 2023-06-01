const express = require("express");
const cors = require("cors");
const { error } = require("../validator/schemas/objects/actiune_schema");

module.exports = function server(useCases, model) {
  const app = express();
  app.use(express.json());
  app.use(cors());
  const PORT = 5800;

  const passport = require("passport");
  require("../auth/config/passport")(useCases, model)(passport);
  app.use(passport.initialize());

  const routesImport = require("./routes_export");
  const routes = routesImport(useCases, model);

  app.use("/", routes.mainRoute);
  app.use(
    "/actiuni",
    passport.authenticate("jwt", { session: false }),
    routes.actiuniRoute
  );
  app.use(
    "/angajati",
    passport.authenticate("jwt", { session: false }),
    routes.angajatiRoute
  );
  app.use(
    "/companii",
    passport.authenticate("jwt", { session: false }),
    routes.companieRoute
  );
  app.use(
    "/configurari", 
    passport.authenticate("jwt", { session: false }),
    routes.configurariRoute
  );
  app.use(
    "/nise",
    passport.authenticate("jwt", { session: false }),
    routes.niseRoute
  );
  app.use(
    "/obiective",
    passport.authenticate("jwt", { session: false }),
    routes.obiectiveRoute
  );
  app.use(
    "/oportunitati",
    passport.authenticate("jwt", { session: false }),
    routes.oportunitatiRoute
  );
  app.use(
    "/produse",
    passport.authenticate("jwt", { session: false }),
    routes.produseRoute
  );
  app.use(
    "/puncteLucru",
    passport.authenticate("jwt", { session: false }),
    routes.punctLucruRoute
  );
  app.use(
    "/vanzari",
    passport.authenticate("jwt", { session: false }),
    routes.vanzariRoute
  );
  app.use(
    "/persoaneContact",
    passport.authenticate("jwt", { session: false }),
    routes.persoaneContactRoute
  );
  app.use("/auth", routes.authRoute);
  app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500);
    res.send({
      error: {
        status: err.status || 500,
        message: err.message,
      },
    });
  });

  function run() {
    app.listen(PORT, () => {
      console.log(`up and running on ${PORT}`);
    });
  }

  return { run };
};
