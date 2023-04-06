const buildReadFunctieAngajatReq = (readFunctieAngajatReqValidator) => {
  return ({ functie_angajat_id } = {}) => {
    let { error } = readFunctieAngajatReqValidator({
      functie_angajat_id,
    });
    if (error) throw new Error(error);

    return {
      getFunctieAngajatId: () => functie_angajat_id,
    };
  };
};

module.exports = buildReadFunctieAngajatReq;
