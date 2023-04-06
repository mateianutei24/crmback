const buildCreateVanzareReq = (createVanzareReqValidator) => {
  return ({
    descriere,
    pret_unitate,
    numar_unitati_vandute,
    pret_total,
    companie_id,
    produs_id,
  } = {}) => {
    let { error } = createVanzareReqValidator({
      descriere,
      pret_unitate,
      numar_unitati_vandute,
      pret_total,
      companie_id,
      produs_id,
    });
    if (error) throw new Error(error);

    return {
      getDescriere: () => descriere,
      getPretUnitate: () => pret_unitate,
      getNumarUnitatiVandute: () => numar_unitati_vandute,
      getPretTotal: () => pret_total,
      getCompanieId: () => companie_id,
      getProdusId: () => produs_id,
    };
  };
};

module.exports = buildCreateVanzareReq;
