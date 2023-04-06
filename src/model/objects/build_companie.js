const buildCompanie = (companieValidator) => {
  return ({
    companie_id,
    nume,
    numar_inregistrare,
    nisa,
    marime_companie,
    activitate_companie,
    vanzari_totale,
    adresa_livrare,
    adresa_facturare,
    numar_angajati,
    cifra_afaceri,
    locatie_gps,
    angajat_responsabil,
    punct_lucru_id,
  } = {}) => {
    let { error } = companieValidator({
      companie_id,
      nume,
      numar_inregistrare,
      nisa,
      marime_companie,
      activitate_companie,
      vanzari_totale,
      adresa_livrare,
      adresa_livrare,
      adresa_facturare,
      numar_angajati,
      cifra_afaceri,
      locatie_gps,
      angajat_responsabil,
      punct_lucru_id,
    });
    if (error) throw new Error(error);

    return {
      getCompanieId: () => companie_id,
      getNume: () => nume,
      getNumarInregistrare: () => numar_inregistrare,
      getNisa: () => nisa,
      getMarimeCompanie: () => marime_companie,
      getActivitateCompanie: () => activitate_companie,
      getVanzariTotale: () => vanzari_totale,
      getPunctLucruId: () => punct_lucru_id,
      getAdresaLivrare: () => adresa_livrare,
      getAdresaFacturare: () => adresa_facturare,
      getNumarAngajati: () => numar_angajati,
      getCifraAfaceri: () => cifra_afaceri,
      getLocatieGps: () => locatie_gps,
      getAngajatResponsabil: () => angajat_responsabil,
      getPunctLucruId: () => punct_lucru_id,
    };
  };
};

module.exports = buildCompanie;
