module.exports = async function updateStatusActiuneUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.updateOneObject(
    `"Status actiune" SET status_actiune_denumire =$1`,
    "status_actiune_id",
    requestObject.getStatusActiuneId(),
    [requestObject.getNumeStatusActiune()]
  );
  return response;
};
