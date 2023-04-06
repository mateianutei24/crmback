const buildCreateNisaReq = (createNisaReqValidator) => {
  return ({ nume_nisa, vanzari_totale, persoana_responsabila } = {}) => {
    let { error } = createNisaReqValidator({
      nume_nisa,
      vanzari_totale,
      persoana_responsabila,
    });
    if (error) throw new Error(error);

    return {
      getNumeNisa: () => nume_nisa,
      getVanzariTotale: () => vanzari_totale,
      getPersoanaResponsabila: () => persoana_responsabila,
    };
  };
};

module.exports = buildCreateNisaReq;
