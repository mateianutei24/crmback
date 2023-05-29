module.exports = async function deleteFunctieAngajatUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.deleteFromDatabase(
    '"Functie angajat"',
    "functie_angajat_id",
    requestObject.getFunctieAngajatId()
  );
  return response;
};
