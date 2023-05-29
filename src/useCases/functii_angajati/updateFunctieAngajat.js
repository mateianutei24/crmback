module.exports = async function updateFunctieAngajatUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.updateOneObject(
    `"Functie angajat" SET functie_angajat_nume =$1 `,
    "functie_angajat_id",
    requestObject.getFunctieAngajatId(),
    [requestObject.getNumeFunctieAngajat()]
  );
  return response;
};
