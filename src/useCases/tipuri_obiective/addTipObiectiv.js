module.exports = async function addTipObiectivUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.addIntoDatabase(
    `"Tip obiectiv"(tip_obiectiv_denumire) VALUES($1)`,
    [requestObject.getNumeTipObiectiv()]
  );
  return response;
};
