module.exports = async function updateAngajatUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.updateOneObject(
    `"Angajat" SET angajat_nume =$1, angajat_prenume = $2, angajat_tip = $3, angajat_functie = $4, angajat_email = $5, angajat_numar_telefon = $6, angajat_punct_lucru_id = $7`,
    "angajat_id",
    requestObject.getAngajatId(),
    [
      requestObject.getNume(),
      requestObject.getPrenume(),
      requestObject.getTip(),
      requestObject.getFunctie(),
      requestObject.getEmail(),
      requestObject.getNumarTelefon(),
      requestObject.getPunctLucruId(),
    ]
  );
  return response;
};
