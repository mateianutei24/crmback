module.exports = async function addObiectivUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.addIntoDatabase(
    `"Obiectiv"(obiectiv_tip,obiectiv_titlu,nisa_id,punct_lucru_id,companie_id,obiectiv_vanzari_totale,obiectiv_data_creare_initiala,obiectiv_data_emitere,obiectiv_numar_luni,obiectiv_data_limita) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,
    [
      requestObject.getTipObiectiv(),
      requestObject.getTitluObiectiv(),
      requestObject.getNisa(),
      requestObject.getPunctLucruId(),
      requestObject.getCompanieId(),
      requestObject.getVanzariTotale(),
      requestObject.getDataCreareInitiala(),
      requestObject.getDataEmitere(),
      requestObject.getNumarLuni(),
      requestObject.getDataLimita(),
    ]
  );
  return response;
};
