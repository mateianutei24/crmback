const buildReadAngajatReq = (readAngajatReqValidator) => {
  return ({ angajat_id } = {}) => {
    let { error } = readAngajatReqValidator({
      angajat_id,
    });
    if (error) throw new Error(error);
    return {
      getAngajatId: () => angajat_id,
    };
  };
};

module.exports = buildReadAngajatReq;
