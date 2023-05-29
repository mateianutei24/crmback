module.exports = async function getPuncteLucruPaginationUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.getObjectsPagination(
    '"Punct de lucru"',
    requestObject.getLimita(),
    requestObject.getLastId(),
    "punct_lucru_id"
  );
  return response;
};
