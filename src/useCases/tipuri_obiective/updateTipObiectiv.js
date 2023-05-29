module.exports = async function updateNisaUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.updateOneObject(
    `"Tip obiectiv" SET tip_obiectiv_denumire =$1`,
    "tip_obiectiv_id",
    requestObject.getTipObiectivId(),
    [requestObject.getNumeTipObiectiv()]
  );
  return response;
};
