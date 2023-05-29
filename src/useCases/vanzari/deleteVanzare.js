module.exports = async function deleteTipObiectivUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.deleteFromDatabase(
    '"Vanzare"',
    "vanzare_id",
    requestObject.getVanzareId()
  );
  return response;
};
