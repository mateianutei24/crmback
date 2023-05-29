module.exports = async function addActivitateCompanieUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.addIntoDatabase(
    `"Activitate companie"( activitate_companie_denumire) VALUES($1)`,
    [requestObject.getActivitateCompanie()]
  );
  return response;
};
