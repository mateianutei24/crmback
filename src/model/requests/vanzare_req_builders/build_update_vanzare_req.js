const buildUpdateVanzareReq = (updateVanzareReqValidator) => {
  return ({
    vanzare_id,
    descriere,
    pret_unitate,
    numar_unitati_vandute,
    pret_total,
    companie_id,
    produs_id,
  } = {}) => {
    let { error } = updateVanzareReqValidator({
      vanzare_id,
      descriere,
      pret_unitate,
      numar_unitati_vandute,
      pret_total,
      companie_id,
      produs_id,
    });
    if (error) throw new Error(error);

    return {
      getVanzareId: () => vanzare_id,
      getDescriere: () => descriere,
      getPretUnitate: () => pret_unitate,
      getNumarUnitatiVandute: () => numar_unitati_vandute,
      getPretTotal: () => pret_total,
      getCompanieId: () => companie_id,
      getProdusId: () => produs_id,
    };
  };
};

module.exports = buildUpdateVanzareReq;
