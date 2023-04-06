const buildUpdatePersoanaContactReq = (updatePersoanaContactReqValidator) => {
  return ({
    persoana_contact_id,
    nume,
    prenume,
    descriere,
    numar_telefon,
    adresa_email,
    companie_id,
  } = {}) => {
    let { error } = updatePersoanaContactReqValidator({
      persoana_contact_id,
      nume,
      prenume,
      descriere,
      numar_telefon,
      adresa_email,
      companie_id,
    });
    if (error) throw new Error(error);

    return {
      getPersoanaContactId: () => persoana_contact_id,
      getNume: () => nume,
      getPrenume: () => prenume,
      getDescriere: () => descriere,
      getNumarTelefon: () => numar_telefon,
      getAdresaEmail: () => adresa_email,
      getCompanieId: () => companie_id,
    };
  };
};

module.exports = buildUpdatePersoanaContactReq;
