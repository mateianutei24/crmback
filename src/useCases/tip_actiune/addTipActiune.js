module.exports = async function addTipActiune(dataController, requestObject) {
  const response = await dataController.addIntoDatabase(
    `"Tip actiune"(tip_actiune_denumire,tip_actiune_timp_executie) VALUES($1,$2)`,
    [requestObject.getNumeTipActiune(), requestObject.getTimpExecutie()]
  );
  return response;
};
