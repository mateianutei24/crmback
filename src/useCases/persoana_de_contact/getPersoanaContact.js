module.exports = async function getPersoanaContactUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.getObject(
    '"Persoana contact"',
    "persoana_contact_id",
    requestObject.getPersoanaContactId()
  );
  return response;
  return response;
};
