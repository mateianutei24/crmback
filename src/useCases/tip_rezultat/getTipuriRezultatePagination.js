module.exports = async function getTipuriRezultatePagination(
  dataController,
  requestObject
) {
  const response = await dataController.getObjectsPagination(
    '"Tip rezultat"',
    requestObject.getLimita(),
    requestObject.getLastId(),
    "tip_rezultat_id"
  );
  console.log(response);
  return response;
};
