module.exports = async function getProdusUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.getObject(
    '"Produs"',
    "produs_id",
    requestObject.getProdusId()
  );
  return response;
};
