const express = require("express");
const cors = require("cors");

module.exports = function server(useCases, model) {
  const app = express();
  app.use(express.json());
  app.use(cors());
  const PORT = 5800;

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
      error: {
        status: err.status || 500,
        message: err.message,
      },
    });
  });

  const routesImport = require("./routes_export");
  const routes = routesImport(useCases, model);

  app.use("/", routes.mainRoute);
  app.use("/actiuni", routes.actiuniRoute);
  app.use("/angajati", routes.angajatiRoute);
  app.use("/companii", routes.companieRoute);
  app.use("/configurari", routes.configurariRoute);
  app.use("/nise", routes.niseRoute);
  app.use("/obiective", routes.obiectiveRoute);
  app.use("/oportunitati", routes.oportunitatiRoute);
  app.use("/produse", routes.produseRoute);
  app.use("/puncteLucru", routes.punctLucruRoute);
  app.use("/vanzari", routes.vanzariRoute);
  app.use("/persoaneContact", routes.persoaneContactRoute);
  function run() {
    app.listen(PORT, () => {
      console.log(`up and running on ${PORT}`);
    });
  }

  return { run };
};
