const buildUpdateAngajatReq = (updateAngajatReqValidator) => {
  return ({
    angajat_id,
    nume,
    prenume,
    tip_angajat_id,
    functie_angajat_id,
    email,
    numar_telefon,
    punct_lucru_id,
  } = {}) => {
    let { error } = updateAngajatReqValidator({
      angajat_id,
      nume,
      prenume,
      tip_angajat_id,
      functie_angajat_id,
      email,
      numar_telefon,
      punct_lucru_id,
    });
    if (error) throw new Error(error);

    return {
      getAngajatId: () => angajat_id,
      getNume: () => nume,
      getPrenume: () => prenume,
      getTip: () => tip_angajat_id,
      getFunctie: () => functie_angajat_id,
      getEmail: () => email,
      getNumarTelefon: () => numar_telefon,
      getPunctLucruId: () => punct_lucru_id,
    };
  };
};

module.exports = buildUpdateAngajatReq;
