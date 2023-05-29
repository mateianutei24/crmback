module.exports = async function getTipObiectivPaginationUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.getObjectsPagination(
    '"Tip oportunitate"',
    requestObject.getLimita(),
    requestObject.getLastId(),
    "tip_oportunitate_id"
  );
  return response;
};
