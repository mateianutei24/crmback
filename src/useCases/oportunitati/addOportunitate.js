module.exports = async function addOportunitateUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.addIntoDatabase(
    `"Oportunitate"(oportunitate_descriere,oportunitate_titlu,tip_oportunitate,oportunitate_data_creare_initiala,oportunitate_data_emitere,oportunitate_numar_luni,oportunitate_due_date,obiectiv_id,identificat_de,vanzari_total) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,
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
