module.exports = async function readLeadUseCase(dataController, requestObject) {
  const response = await dataController.getObject(
    '"Lead"',
    "lead_id",
    requestObject.getLeadId()
  );
  return response;
};
