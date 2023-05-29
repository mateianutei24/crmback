module.exports = async function addMarimeCompanieUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.addIntoDatabase(
    `"Marime companie"(marime_companie_denumire) VALUES($1)`,
    [requestObject.getMarimeCompanie()]
  );

  return response;
};
