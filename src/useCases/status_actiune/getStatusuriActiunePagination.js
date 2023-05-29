module.exports = async function getStatusuriActiuneUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.getObjectsPagination(
    '"Status actiune"',
    requestObject.getLimita(),
    requestObject.getLastId(),
    "status_actiune_id"
  );
  return response;
};
