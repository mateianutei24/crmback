module.exports = async function getStatusActiuneUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.getObject(
    '"Status actiune"',
    "status_actiune_id",
    requestObject.getStatusActiuneId()
  );
  return response;
};
