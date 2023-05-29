module.exports = async function getTipuriAngajatiPaginationUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.getObjectsPagination(
    '"Tip angajat"',
    requestObject.getLimita(),
    requestObject.getLastId(),
    "tip_angajat_id"
  );
  return response;
};
