function routesExport(useCases, model) {
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
    mainRoute: mainRouteImport(useCases, model),
    angajatiRoute: angajatRouteImport(useCases, model),
    actiuniRoute: actiuniRouteImport(useCases, model),
    companieRoute: companieRouteImport(useCases, model),
    configurariRoute: configurariRouteImport(useCases, model),
    niseRoute: niseRouteImport(useCases, model),
    obiectiveRoute: obiectiveRouteImport(useCases, model),
    oportunitatiRoute: oportunitatiRouteImport(useCases, model),
    produseRoute: produseRouteImport(useCases, model),
    punctLucruRoute: punctLucruRouteImport(useCases, model),
    vanzariRoute: vanzariRouteImport(useCases, model),
    persoaneContactRoute: persoaneContactRouteImport(useCases, model),
  };
}

module.exports = routesExport;
