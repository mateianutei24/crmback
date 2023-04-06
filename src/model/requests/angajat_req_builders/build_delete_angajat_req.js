const buildDeleteAngajatReq = (deleteAngajatReqValidator) => {
  return ({ angajat_id } = {}) => {
    let { error } = deleteAngajatReqValidator({
      angajat_id,
    });
    if (error) throw new Error(error);
    return {
      getAngajatId: () => angajat_id,
    };
  };
};

module.exports = buildDeleteAngajatReq;
