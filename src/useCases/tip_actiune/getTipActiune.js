module.exports = async function getTipActiune(dataController, requestObject) {
  const response = await dataController.getObject(
    '"Tip actiune"',
    "tip_actiune_id",
    requestObject.getTipActiuneId()
  );
  return response;
};
