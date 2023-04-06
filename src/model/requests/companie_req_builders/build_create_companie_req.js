const buildCreateCompanieReq = (createCompanieReqValidator) => {
  return ({
    nume,
    numar_inregistrare,
    nisa_id,
    marime_companie_id,
    activitate_companie_id,
    vanzari_totale,
    adresa_livrare,
    adresa_facturare,
    numar_angajati,
    cifra_afaceri,
    locatie_gps,
    angajat_responsabil,
    punct_lucru_id,
    email,
    numar_telefon,
  } = {}) => {
    let { error } = createCompanieReqValidator({
      nume,
      numar_inregistrare,
      nisa_id,
      marime_companie_id,
      activitate_companie_id,
      vanzari_totale,
      adresa_livrare,
      adresa_facturare,
      numar_angajati,
      cifra_afaceri,
      locatie_gps,
      angajat_responsabil,
      punct_lucru_id,
      email,
      numar_telefon,
    });
    if (error) throw new Error(error);

    return {
      getNume: () => nume,
      getNumarInregistrare: () => numar_inregistrare,
      getNisa: () => nisa_id,
      getMarimeCompanie: () => marime_companie_id,
      getActivitateCompanie: () => activitate_companie_id,
      getVanzariTotale: () => vanzari_totale,
      getAdresaLivrare: () => adresa_livrare,
      getAdresaFacturare: () => adresa_facturare,
      getNumarAngajati: () => numar_angajati,
      getCifraAfaceri: () => cifra_afaceri,
      getLocatieGps: () => locatie_gps,
      getAngajatResponsabil: () => angajat_responsabil,
      getPunctLucruId: () => punct_lucru_id,
      getEmail: () => email,
      getNumarTelefon: () => numar_telefon,
    };
  };
};

module.exports = buildCreateCompanieReq;
