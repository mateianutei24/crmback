module.exports = async function addPunctLucruUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.addIntoDatabase(
    `"Punct de lucru"(punct_lucru_nume, punct_lucru_adresa, punct_lucru_locatie_gps,punct_lucru_vanzari_totale) VALUES($1,$2,$3,$4)`,
    [
      requestObject.getNumePunctLucru(),
      requestObject.getAdresa(),
      requestObject.getLocatieGps(),
      requestObject.getVanzariTotale(),
    ]
  );
  return response;
};
