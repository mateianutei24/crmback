module.exports = async function deleteLeadUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.deleteFromDatabase(
    '"Lead"',
    "lead_id",
    requestObject.getLeadId()
  );
  return response;
};
