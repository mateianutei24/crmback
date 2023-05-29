module.exports = async function deleteNisaUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.deleteFromDatabase(
    '"Obiectiv"',
    "obiectiv_id",
    requestObject.getObiectivId()
  );
  return response;
};
