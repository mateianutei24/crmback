module.exports = async function addTipRezultat(dataController, requestObject) {
  const response = await dataController.addIntoDatabase(
    `"Tip rezultat"(tip_rezultat_denumire) VALUES($1)`,
    [requestObject.getNumeTipRezultatActiune()]
  );

  return response;
};
