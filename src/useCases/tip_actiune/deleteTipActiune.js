module.exports = async function deleteTipActiune(
  dataController,
  requestObject
) {
  const response = await dataController.deleteFromDatabase(
    '"Tip actiune"',
    "tip_actiune_id",
    requestObject.getTipActiuneId()
  );
  return response;
};
