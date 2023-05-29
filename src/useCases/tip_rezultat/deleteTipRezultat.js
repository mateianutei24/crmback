module.exports = async function deleteTipRezultat(
  dataController,
  requestObject
) {
  const response = await dataController.deleteFromDatabase(
    '"Tip rezultat"',
    "tip_rezultat_id",
    requestObject.getTipRezultatActiuneId()
  );
  return response;
};
