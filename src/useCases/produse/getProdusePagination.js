module.exports = async function getProdusePaginationUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.getObjectsPagination(
    '"Produs"',
    requestObject.getLimita(),
    requestObject.getLastId(),
    "produs_id"
  );
  return response;
};
