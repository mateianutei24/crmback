module.exports = async function updateMarimeCompanieUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.updateOneObject(
    `"Marime companie" SET marime_companie_denumire = $1`,
    "marime_companie_id",
    requestObject.getMarimeCompanieId(),
    [requestObject.getMarimeCompanie()]
  );
  return response;
};
