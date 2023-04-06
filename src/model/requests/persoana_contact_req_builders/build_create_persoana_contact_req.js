const buildCreatePersoanaContactReq = (createPersoanaContactReqValidator) => {
  return ({
    nume,
    prenume,
    descriere,
    numar_telefon,
    adresa_email,
    companie_id,
  } = {}) => {
    let { error } = createPersoanaContactReqValidator({
      nume,
      prenume,
      descriere,
      numar_telefon,
      adresa_email,
      companie_id,
    });
    if (error) throw new Error(error);

    return {
      getNume: () => nume,
      getPrenume: () => prenume,
      getDescriere: () => descriere,
      getNumarTelefon: () => numar_telefon,
      getAdresaEmail: () => adresa_email,
      getCompanieId: () => companie_id,
    };
  };
};

module.exports = buildCreatePersoanaContactReq;
