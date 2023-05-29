module.exports = async function deleteStatusActiuneUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.deleteFromDatabase(
    '"Status actiune"',
    "status_actiune_id",
    requestObject.getStatusActiuneId()
  );
  return response;
};
