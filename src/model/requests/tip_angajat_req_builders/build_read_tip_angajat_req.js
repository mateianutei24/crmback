const buildReadTipAngajatReq = (readTipAngajatReqValidator) => {
  return ({ tip_angajat_id } = {}) => {
    let { error } = readTipAngajatReqValidator({
      tip_angajat_id,
    });
    if (error) throw new Error(error);

    return {
      getTipAngajatId: () => tip_angajat_id,
    };
  };
};

module.exports = buildReadTipAngajatReq;
