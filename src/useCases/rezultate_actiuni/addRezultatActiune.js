module.exports = async function addRezultatUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.addIntoDatabase(
    `"Rezultate actiune"(tip_rezultat_id,rezultat_valoare,rezultat_descriere,actiune_id) VALUES($1,$2,$3,$4)`,
    [
      requestObject.getTipRezultat(),
      requestObject.getValoare(),
      requestObject.getRezultatDescriere(),
      requestObject.getActiuneId(),
    ]
  );
  return response;
};
