module.exports = async function getTipRezultat(dataController, requestObject) {
  const response = await dataController.getObject(
    '"Tip rezultat"',
    "tip_rezultat_id",
    requestObject.getTipRezultatActiuneId()
  );
  return response;
};
