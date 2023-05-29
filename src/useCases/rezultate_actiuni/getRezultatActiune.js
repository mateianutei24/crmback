module.exports = async function getRezultatUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.getObject(
    '"Rezultate actiune"',
    "rezultat_id",
    requestObject.getRezultatId()
  );
  return response;
};
