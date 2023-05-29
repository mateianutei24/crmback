module.exports = async function addTipObiectivUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.addIntoDatabase(
    `"Tip oportunitate"(tip_oportunitate_denumire) VALUES($1)`,
    [requestObject.getNumeTipOportunitate()]
  );
  return response;
};
