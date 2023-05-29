module.exports = async function updateTipAngajatUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.updateOneObject(
    `"Tip angajat" SET tip_angajat_nume =$1 `,
    "tip_angajat_id",
    requestObject.getTipAngajatId(),
    [requestObject.getNumeTipAngajat()]
  );
  return response;
};
