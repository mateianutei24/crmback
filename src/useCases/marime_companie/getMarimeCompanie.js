module.exports = async function getMarimeCompanieUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.getObject(
    '"Marime companie"',
    "marime_companie_id",
    requestObject.getMarimeCompanieId()
  );
  return response;
};
