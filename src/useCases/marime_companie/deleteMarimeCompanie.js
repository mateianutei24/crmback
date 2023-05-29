module.exports = async function deleteMarimeCompanieUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.deleteFromDatabase(
    '"Marime companie"',
    "marime_companie_id",
    requestObject.getMarimeCompanieId()
  );
  return response;
};
