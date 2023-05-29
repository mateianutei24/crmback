module.exports = async function deleteOportunitateUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.deleteFromDatabase(
    '"Oportunitate"',
    "oportunitate_id",
    requestObject.getOportunitateId()
  );
  return response;
};
