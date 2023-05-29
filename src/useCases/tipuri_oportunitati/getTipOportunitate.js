module.exports = async function getTipObiectivUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.getObject(
    '"Tip oportunitate"',
    "tip_oportunitate_id",
    requestObject.getTipOportunitateId()
  );
  return response;
};
