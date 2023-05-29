module.exports = async function getTipObiectivPaginationUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.getObjectsPagination(
    '"Tip obiectiv"',
    requestObject.getLimita(),
    requestObject.getLastId(),
    "tip_obiectiv_id"
  );
  return response;
};
