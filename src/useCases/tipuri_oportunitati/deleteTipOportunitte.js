module.exports = async function deleteTipObiectivUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.deleteFromDatabase(
    '"Tip oportunitate"',
    "tip_oportunitate_id",
    requestObject.getTipOportunitateId()
  );
  return response;
};
