const buildAngajat = (angajatValidator) => {
  return ({
    angajat_id,
    nume,
    prenume,
    tip,
    functie,
    email,
    numar_telefon,
    punct_lucru_id,
  } = {}) => {
    let { error } = angajatValidator({
      angajat_id,
      nume,
      prenume,
      tip,
      functie,
      email,
      numar_telefon,
      punct_lucru_id,
    });
    if (error) throw new Error(error);

    return {
      getAngajatId: () => angajat_id,
      getNume: () => nume,
      getPrenume: () => prenume,
      getTip: () => tip,
      getFunctie: () => functie,
      getEmail: () => email,
      getNumarTelefon: () => numar_telefon,
      getPunctLucruId: () => punct_lucru_id,
    };
  };
};

module.exports = buildAngajat;
