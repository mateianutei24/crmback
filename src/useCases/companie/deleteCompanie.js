module.exports = async function deleteCompanieUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.deleteFromDatabase(
    '"Companie"',
    "companie_id",
    requestObject.getCompanieId()
  );
  return response;
};
