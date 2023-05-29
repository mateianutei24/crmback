module.exports = async function addTipObiectivUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.addIntoDatabase(
    `"Vanzare"(vanzare_descriere,vanzare_pret_unitate,vanzare_numar_unitati_vandute,vanzare_pret_total,companie_id,produs_id) VALUES($1,$2,$3,$4,$5,$6)`,
    [
      requestObject.getDescriere(),
      requestObject.getPretUnitate(),
      requestObject.getNumarUnitatiVandute(),
      requestObject.getPretTotal(),
      requestObject.getCompanieId(),
      requestObject.getProdusId(),
    ]
  );
  return response;
};
