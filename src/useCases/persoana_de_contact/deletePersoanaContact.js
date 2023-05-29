module.exports = async function deletePersoanaContactUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.deleteFromDatabase(
    '"Persoana contact"',
    "persoana_contact_id",
    requestObject.getPersoanaContactId()
  );
  return response;
};
