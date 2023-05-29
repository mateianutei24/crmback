module.exports = async function getFunctieAngajatUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.getObject(
    '"Functie angajat"',
    "functie_angajat_id",
    requestObject.getFunctieAngajatId()
  );
  return response;
};
