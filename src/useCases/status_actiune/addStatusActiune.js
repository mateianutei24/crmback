module.exports = async function addStatusActiuneUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.addIntoDatabase(
    `"Status actiune"(status_actiune_denumire) VALUES($1)`,
    [requestObject.getNumeStatusActiune()]
  );
  return response;
};
