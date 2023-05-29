module.exports = async function addAngajatUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.addIntoDatabase(
    `"Angajat"(angajat_nume,angajat_prenume,angajat_tip,angajat_functie,angajat_email,angajat_numar_telefon,angajat_punct_lucru_id) VALUES($1,$2,$3,$4,$5,$6,$7)`,
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
