const buildFunctieAngajat = (functieAngajatValidator) => {
  return ({ functie_angajat_id, nume_functie_angajat } = {}) => {
    let { error } = functieAngajatValidator({
      functie_angajat_id,
      nume_functie_angajat,
    });
    if (error) throw new Error(error);

    return {
      getFunctieAngajatId: () => functie_angajat_id,
      getNumeFunctieAngajat: () => nume_functie_angajat,
    };
  };
};

module.exports = buildFunctieAngajat;
