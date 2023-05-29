module.exports = async function getTipuriActiuniPagination(
  dataController,
  requestObject
) {
  const response = await dataController.getObjectsPagination(
    '"Tip actiune"',
    requestObject.getLimita(),
    requestObject.getLastId(),
    "tip_actiune_id"
  );
  return response;
};
