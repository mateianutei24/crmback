module.exports = async function updatePunctLucruUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.updateOneObject(
    `"Punct de lucru" SET punct_lucru_nume = $1, punct_lucru_adresa = $2, punct_lucru_locatie_gps=$3, punct_lucru_vanzari_totale=$4 `,
    "punct_lucru_id",
    requestObject.getPunctLucruId(),
    [
      requestObject.getNumePunctLucru(),
      requestObject.getAdresa(),
      requestObject.getLocatieGps(),
      requestObject.getVanzariTotale(),
    ]
  );
  return response;
};
