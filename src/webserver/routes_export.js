function routesExport(controller, model) {
  const mainRouteImport = require("./routes/main_route");
  const actiuniRouteImport = require("./routes/actiuni_route");
  const angajatRouteImport = require("./routes/angajat_route");
  const companieRouteImport = require("./routes/companie_route");
  const configurariRouteImport = require("./routes/configurari_route");
  const niseRouteImport = require("./routes/nise_route");
  const obiectiveRouteImport = require("./routes/obiective_route");
  const oportunitatiRouteImport = require("./routes/oportunitati_route");
  const produseRouteImport = require("./routes/produse_route");
  const punctLucruRouteImport = require("./routes/punct_lucru_route");
  const vanzariRouteImport = require("./routes/vanzari_route");
  const persoaneContactRouteImport = require("./routes/persoane_contact_route");

  return {
    mainRoute: mainRouteImport(controller, model),
    angajatiRoute: angajatRouteImport(controller, model),
    actiuniRoute: actiuniRouteImport(controller, model),
    companieRoute: companieRouteImport(controller, model),
    configurariRoute: configurariRouteImport(controller, model),
    niseRoute: niseRouteImport(controller, model),
    obiectiveRoute: obiectiveRouteImport(controller, model),
    oportunitatiRoute: oportunitatiRouteImport(controller, model),
    produseRoute: produseRouteImport(controller, model),
    punctLucruRoute: punctLucruRouteImport(controller, model),
    vanzariRoute: vanzariRouteImport(controller, model),
    persoaneContactRoute: persoaneContactRouteImport(controller, model),
  };
}

module.exports = routesExport;
