module.exports = async function updateTipRezultat(
  dataController,
  requestObject
) {
  const response = await dataController.updateOneObject(
    `"Tip rezultat" SET tip_rezultat_denumire =$1`,
    "tip_rezultat_id",
    requestObject.getTipRezultatActiuneId(),
    [requestObject.getNumeTipRezultatActiune()]
  );
  return response;
};
