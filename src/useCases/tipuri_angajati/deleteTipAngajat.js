module.exports = async function deleteTipAngajatUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.deleteFromDatabase(
    '"Tip angajat"',
    "tip_angajat_id",
    requestObject.getTipAngajatId()
  );
  return response;
};
