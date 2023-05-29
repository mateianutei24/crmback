module.exports = async function readTipAngajatUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.getObject(
    '"Tip angajat"',
    "tip_angajat_id",
    requestObject.getTipAngajatId()
  );
  return response;
};
