module.exports = async function updateNisaUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.updateOneObject(
    `"Nisa" SET nisa_denumire =$1, nisa_vanzari_totale = $2, nisa_persoana_responsabila=$3`,
    "nisa_id",
    requestObject.getNisaId(),
    [
      requestObject.getNumeNisa(),
      requestObject.getVanzariTotale(),
      requestObject.getPersoanaResponsabila(),
    ]
  );
  return response;
};
