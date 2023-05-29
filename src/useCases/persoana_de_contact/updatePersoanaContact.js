module.exports = async function updatePersoanaContactUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.updateOneObject(
    `"Persoana contact" SET persoana_contact_nume = $1, persoana_contact_prenume = $2, persoana_contact_descriere = $3, persoana_contact_numar_telefon= $4, persoana_contact_adresa_email = $5, companie_id =$6`,
    "persoana_contact_id",
    requestObject.getPersoanaContactId(),
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
