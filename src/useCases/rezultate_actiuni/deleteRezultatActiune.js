module.exports = async function deleteRezultatUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.deleteFromDatabase(
    '"Rezultate actiune"',
    "rezultat_id",
    requestObject.getRezultatId()
  );
  return response;
};
