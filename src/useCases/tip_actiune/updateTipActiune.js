module.exports = async function updateTipActiune(
  dataController,
  requestObject
) {
  const response = await dataController.updateOneObject(
    `"Tip actiune" SET tip_actiune_denumire =$1, tip_actiune_timp_executie = $2 `,
    "tip_actiune_id",
    requestObject.getTipActiuneId(),
    [requestObject.getNumeTipActiune(), requestObject.getTimpExecutie()]
  );
  return response;
};
