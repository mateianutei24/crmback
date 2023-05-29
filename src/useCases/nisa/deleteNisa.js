module.exports = async function deleteNisaUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.deleteFromDatabase(
    '"Nisa"',
    "nisa_id",
    requestObject.getNisaId()
  );
  return response;
};
