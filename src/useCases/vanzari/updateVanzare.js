module.exports = async function updateNisaUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.updateOneObject(
    `"Vanzare" SET vanzare_descriere =$1,vanzare_pret_unitate = $2,vanzare_numar_unitati_vandute =$3,vanzare_pret_total =$4,companie_id =$5,produs_id =$6`,
    "vanzare_id",
    requestObject.getVanzareId(),
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
