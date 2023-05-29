module.exports = async function deletePunctLucruUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.deleteFromDatabase(
    '"Punct de lucru"',
    "punct_lucru_id",
    requestObject.getPunctLucruId()
  );
};
