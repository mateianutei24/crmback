module.exports = async function deleteTipObiectivUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.deleteFromDatabase(
    '"Tip obiectiv"',
    "tip_obiectiv_id",
    requestObject.getTipObiectivId()
  );
  return response;
};
