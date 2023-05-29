module.exports = async function deleteActiuneUseCase(
  dataController,
  requestObject
) {
  console.log(requestObject);
  const response = await dataController.deleteFromDatabase(
    '"Actiune"',
    "actiune_id",
    requestObject.getActiuneId()
  );
  return response;
};
