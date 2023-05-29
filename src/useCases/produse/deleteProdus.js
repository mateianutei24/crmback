module.exports = async function deleteProdusUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.deleteFromDatabase(
    '"Produs"',
    "produs_id",
    requestObject.getProdusId()
  );
  return response;
};
