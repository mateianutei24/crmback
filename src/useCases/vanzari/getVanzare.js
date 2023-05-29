module.exports = async function getTipObiectivUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.getObject(
    '"Vanzare"',
    "vanzare_id",
    requestObject.getVanzareId()
  );
  return response;
};
