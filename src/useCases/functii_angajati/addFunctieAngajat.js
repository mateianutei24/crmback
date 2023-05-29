module.exports = async function addFunctieAngajatUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.addIntoDatabase(
    `"Functie angajat"(functie_angajat_nume) VALUES($1)`,
    [requestObject.getNumeFunctieAngajat()]
  );
  return response;
};
