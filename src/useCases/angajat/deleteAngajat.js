module.exports = async function deleteAngajatUseCase(
  dataController,
  requestObject
) {
  console.log(requestObject);
  const response = await dataController.deleteFromDatabase(
    '"Angajat"',
    "angajat_id",
    requestObject.getAngajatId()
  );
  return response;
};
