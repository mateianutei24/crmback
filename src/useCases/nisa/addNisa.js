module.exports = async function addNisaUseCase(dataController, requestObject) {
  const response = await dataController.addIntoDatabase(
    `"Nisa"(nisa_denumire,nisa_vanzari_totale,nisa_persoana_responsabila) VALUES($1,$2,$3)`,
    [
      requestObject.getNumeNisa(),
      requestObject.getVanzariTotale(),
      requestObject.getPersoanaResponsabila(),
    ]
  );
  return response;
};
