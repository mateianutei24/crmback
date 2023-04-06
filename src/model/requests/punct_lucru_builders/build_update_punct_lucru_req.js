const buildUpdatePunctLucruReq = (updatePunctLucruReqValidator) => {
  return ({
    punct_lucru_id,
    nume_punct_lucru,
    adresa,
    locatie_gps,
    vanzari_totale,
  } = {}) => {
    let { error } = updatePunctLucruReqValidator({
      punct_lucru_id,
      nume_punct_lucru,
      adresa,
      locatie_gps,
      vanzari_totale,
    });
    if (error) throw new Error(error);

    return {
      getPunctLucruId: () => punct_lucru_id,
      getNumePunctLucru: () => nume_punct_lucru,
      getAdresa: () => adresa,
      getLocatieGps: () => locatie_gps,
      getVanzariTotale: () => vanzari_totale,
    };
  };
};

module.exports = buildUpdatePunctLucruReq;
