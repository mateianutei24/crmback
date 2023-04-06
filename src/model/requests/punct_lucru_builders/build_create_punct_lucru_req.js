const buildCreatePunctLucruReq = (createPunctLucruReqValidator) => {
  return ({ nume_punct_lucru, adresa, locatie_gps, vanzari_totale } = {}) => {
    let { error } = createPunctLucruReqValidator({
      nume_punct_lucru,
      adresa,
      locatie_gps,
      vanzari_totale,
    });
    if (error) throw new Error(error);

    return {
      getNumePunctLucru: () => nume_punct_lucru,
      getAdresa: () => adresa,
      getLocatieGps: () => locatie_gps,
      getVanzariTotale: () => vanzari_totale,
    };
  };
};

module.exports = buildCreatePunctLucruReq;
