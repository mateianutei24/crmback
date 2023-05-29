module.exports = async function getPunctLucruUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.getObject(
    '"Punct de lucru"',
    "punct_lucru_id",
    requestObject.getPunctLucruId()
  );
  return response;
};
