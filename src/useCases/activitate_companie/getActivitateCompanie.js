module.exports = async function getActivitateCompanieUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.getObject(
    '"Activitate companie"',
    "activitate_companie_id",
    requestObject.getActivitateCompanieId()
  );
  return response;
};
