module.exports = async function updateProdusUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.updateOneObject(
    `"Produs" SET produs_denumire =$1, produs_gama = $2`,
    "produs_id",
    requestObject.getProdusId(),
    [requestObject.getNumeProdus(), requestObject.getGama()]
  );
  return response;
};
