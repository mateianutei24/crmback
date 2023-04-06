const buildUpdateFunctieAngajatReq = (updateFunctieAngajatValidator) => {
  return ({ functie_angajat_id, nume_functie_angajat } = {}) => {
    let { error } = updateFunctieAngajatValidator({
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

module.exports = buildUpdateFunctieAngajatReq;
