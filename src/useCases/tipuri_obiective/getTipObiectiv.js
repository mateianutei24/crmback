module.exports = async function getTipObiectivUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.getObject(
    '"Tip obiectiv"',
    "tip_obiectiv_id",
    requestObject.getTipObiectivId()
  );
  return response;
};
