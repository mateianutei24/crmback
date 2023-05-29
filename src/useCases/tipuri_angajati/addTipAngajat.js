module.exports = async function addTipAngajatUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.addIntoDatabase(
    `"Tip angajat"(tip_angajat_nume) VALUES($1)`,
    [requestObject.getNumeTipAngajat()]
  );
  return response;
};
