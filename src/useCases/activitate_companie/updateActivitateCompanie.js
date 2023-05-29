module.exports = async function updateActivitateCompanieUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.updateOneObject(
    `"Activitate companie" SET activitate_companie_denumire = $1`,
    "activitate_companie_id",
    requestObject.getActivitateCompanieId(),
    [requestObject.getActivitateCompanie()]
  );
  return response;
};
