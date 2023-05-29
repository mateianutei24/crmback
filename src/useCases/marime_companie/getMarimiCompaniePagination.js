module.exports = async function getMarimiCompanieUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.getObjectsPagination(
    '"Marime companie"',
    requestObject.getLimita(),
    requestObject.getLastId(),
    "marime_companie_id"
  );
  return response;
};
