const buildNisa = (nisaValidator) => {
  return ({
    nisa_id,
    nume_nisa,
    vanzari_totale,
    persoana_responsabila,
  } = {}) => {
    let { error } = nisaValidator({
      nisa_id,
      nume_nisa,
      vanzari_totale,
      persoana_responsabila,
    });
    if (error) throw new Error(error);

    return {
      getNisaId: () => nisa_id,
      getNumeNisa: () => nume_nisa,
      getVanzariTotale: () => vanzari_totale,
      getPersoanaResponsabile: () => persoana_responsabila,
    };
  };
};

module.exports = buildNisa;
