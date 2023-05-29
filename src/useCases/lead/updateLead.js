module.exports = async function updateLeadUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.updateOneObject(
    `"Lead" SET  companie_id = $1, identificat_de = $2, lead_descriere=$3`,
    "lead_id",
    requestObject.getLeadId(),
    [
      requestObject.getCompanieId(),
      requestObject.getIdentificatDe(),
      requestObject.getDescriere(),
    ]
  );
  return response;
};
