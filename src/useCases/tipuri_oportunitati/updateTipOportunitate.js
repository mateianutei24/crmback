module.exports = async function updateNisaUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.updateOneObject(
    `"Tip oportunitate" SET tip_oportunitate_denumire =$1`,
    "tip_oportunitate_id",
    requestObject.getTipOportunitateId(),
    [requestObject.getNumeTipOportunitate()]
  );
  return response;
};
