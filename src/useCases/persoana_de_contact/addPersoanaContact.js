module.exports = async function addPersoanaContactUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.addIntoDatabase(
    `"Persoana contact"(persoana_contact_nume,persoana_contact_prenume,persoana_contact_descriere,persoana_contact_numar_telefon,persoana_contact_adresa_email,companie_id) VALUES($1,$2,$3,$4,$5,$6)`,
    [
      requestObject.getNume(),
      requestObject.getPrenume(),
      requestObject.getDescriere(),
      requestObject.getNumarTelefon(),
      requestObject.getAdresaEmail(),
      requestObject.getCompanieId(),
    ]
  );
  return response;
};
