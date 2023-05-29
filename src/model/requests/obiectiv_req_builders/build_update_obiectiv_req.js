const buildUpdateObiectivReq = (updateObiectivReqValidator) => {
  return ({
    obiectiv_id,
    tip_obiectiv,
    titlu_obiectiv,
    nisa_id,
    punct_lucru_id,
    companie_id,
    vanzari_totale,
    data_creare_initiala,
    data_emitere,
    numar_luni,
    data_limita,
  } = {}) => {
    let { error } = updateObiectivReqValidator({
      obiectiv_id,
      tip_obiectiv,
      titlu_obiectiv,
      nisa_id,
      punct_lucru_id,
      companie_id,
      vanzari_totale,
      data_creare_initiala,
      data_emitere,
      numar_luni,
      data_limita,
    });
    if (error) throw new Error(error);

    return {
      getObiectivId: () => obiectiv_id,
      getTipObiectiv: () => tip_obiectiv,
      getTitluObiectiv: () => titlu_obiectiv,
      getNisa: () => nisa_id,
      getPunctLucruId: () => punct_lucru_id,
      getCompanieId: () => companie_id,
      getVanzariTotale: () => vanzari_totale,
      getDataCreareInitiala: () => data_creare_initiala,
      getDataEmitere: () => data_emitere,
      getDataLimita: () => data_limita,
      getNumarLuni: () => numar_luni,
    };
  };
};

module.exports = buildUpdateObiectivReq;
