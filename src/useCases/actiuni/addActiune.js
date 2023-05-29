module.exports = async function addActiuneUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.addIntoDatabase(
    `"Actiune"(tip_actiune_id,status_actiune_id,receptor_id,emitator_id,actiune_descriere,actiune_data_creare_initiala,actiune_data_emitere,actiune_due_date,oportunitate_id) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
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
