module.exports = async function updateRezultatUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.updateOneObject(
    `"Rezultate actiune" SET tip_rezultat_id = $1, rezultat_valoare = $2, rezultat_descriere = $3,actiune_id = $4`,
    "rezultat_id",
    requestObject.getRezultatId(),
    [
      requestObject.getTipRezultat(),
      requestObject.getValoare(),
      requestObject.getRezultatDescriere(),
      requestObject.getActiuneId(),
    ]
  );
  return response;
};
