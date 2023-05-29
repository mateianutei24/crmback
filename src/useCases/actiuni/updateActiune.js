module.exports = async function updateAngajatUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.updateOneObject(
    `"Actiune" SET tip_actiune_id =$1, status_actiune_id = $2,receptor_id =$3,emitator_id =$4,actiune_descriere = $5, actiune_data_creare_initiala =$6,actiune_data_emitere = $7,actiune_due_date = $8, oportunitate_id = $9`,
    "actiune_id",
    requestObject.getActiuneId(),
    [
      requestObject.getTipActiune(),
      requestObject.getStatus(),
      requestObject.getReceptorId(),
      requestObject.getEmitatorId(),
      requestObject.getDescriere(),
      requestObject.getDataCreareInitiala(),
      requestObject.getDataEmitere(),
      requestObject.getDataLimita(),
      requestObject.getOportunitateId(),
    ]
  );
  return response;
};
