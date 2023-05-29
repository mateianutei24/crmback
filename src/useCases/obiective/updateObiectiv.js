module.exports = async function updateNisaUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.updateOneObject(
    `"Obiectiv" SET obiectiv_tip =$1, obiectiv_titlu = $2, nisa_id = $3,punct_lucru_id = $4,companie_id = $5,obiectiv_vanzari_totale = $6,obiectiv_data_creare_initiala = $7,obiectiv_data_emitere = $8,obiectiv_numar_luni = $9,obiectiv_data_limita = $10`,
    "obiectiv_id",
    requestObject.getObiectivId(),
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
