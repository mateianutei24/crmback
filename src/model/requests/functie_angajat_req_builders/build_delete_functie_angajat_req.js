const buildDeleteFunctieAngajatReq = (deleteFunctieAngajatReqValidator) => {
  return ({ functie_angajat_id } = {}) => {
    let { error } = deleteFunctieAngajatReqValidator({
      functie_angajat_id,
    });
    if (error) throw new Error(error);

    return {
      getFunctieAngajatId: () => functie_angajat_id,
    };
  };
};

module.exports = buildDeleteFunctieAngajatReq;
