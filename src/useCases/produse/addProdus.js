module.exports = async function addProdusUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.addIntoDatabase(
    `"Produs"(produs_denumire,produs_gama) VALUES($1,$2)`,
    [requestObject.getNumeProdus(), requestObject.getGama()]
  );
  return response;
};
