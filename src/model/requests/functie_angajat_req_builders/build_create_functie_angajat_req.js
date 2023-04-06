const buildCreateFunctieAngajatReq = (createFunctieAngajatReqValidator) => {
  return ({ nume_functie_angajat } = {}) => {
    let { error } = createFunctieAngajatReqValidator({
      nume_functie_angajat,
    });
    if (error) throw new Error(error);

    return {
      getNumeFunctieAngajat: () => nume_functie_angajat,
    };
  };
};

module.exports = buildCreateFunctieAngajatReq;
