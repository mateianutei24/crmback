module.exports = async function getFunctiiAngajatiPaginationUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.getObjectsPagination(
    '"Functie angajat"',
    requestObject.getLimita(),
    requestObject.getLastId(),
    "functie_angajat_id"
  );
  return response;
};
