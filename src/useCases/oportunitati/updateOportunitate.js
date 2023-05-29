module.exports = async function updateOportunitateUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.updateOneObject(
    `"Oportunitate" SET oportunitate_descriere =$1, oportunitate_titlu = $2, tip_oportunitate = $3, oportunitate_data_creare_initiala = $4,oportunitate_data_emitere = $5, oportunitate_numar_luni = $6 ,oportunitate_due_date = $7 , obiectiv_id = $8,identificat_de = $9,vanzari_total = $10`,
    "oportunitate_id",
    requestObject.getOportunitateId(),
    [
      requestObject.getDescriere(),
      requestObject.getTitluOportunitate(),
      requestObject.getTipOportunitate(),
      requestObject.getDataCreareInitiala(),
      requestObject.getDataEmitere(),
      requestObject.getPerioadaDesfasurare(),
      requestObject.getDataLimita(),
      requestObject.getObiectivId(),
      requestObject.getIdentificatDe(),
      requestObject.getVanzariTotale(),
    ]
  );
  return response;
};
