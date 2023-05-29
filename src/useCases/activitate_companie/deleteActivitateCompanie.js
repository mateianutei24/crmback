module.exports = async function deleteActivitateCompanieUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.deleteFromDatabase(
    '"Activitate companie"',
    "activitate_companie_id",
    requestObject.getActivitateCompanieId()
  );
  return response;
};
