module.exports = async function getActivitatiCompanieUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.getObjectsPagination(
    '"Activitate companie"',
    requestObject.getLimita(),
    requestObject.getLastId(),
    "activitate_companie_id"
  );
  return response;
};
