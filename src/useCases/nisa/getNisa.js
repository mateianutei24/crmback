module.exports = async function getNisaUseCase(dataController, requestObject) {
  const response = await dataController.getObject(
    '"Nisa"',
    "nisa_id",
    requestObject.getNisaId()
  );
  return response;
};
