module.exports = async function addLeadUseCase(dataController, requestObject) {
  const response = await dataController.addIntoDatabase(
    `"Lead"(companie_id,identificat_de,lead_descriere) VALUES($1,$2,$3)`,
    [
      requestObject.getCompanieId(),
      requestObject.getIdentificatDe(),
      requestObject.getDescriere(),
    ]
  );
  return response;
};
