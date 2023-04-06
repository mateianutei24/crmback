const buildDeleteTipAngajatReq = (deleteTipAngajatReqValidator) => {
  return ({ tip_angajat_id } = {}) => {
    let { error } = deleteTipAngajatReqValidator({
      tip_angajat_id,
    });
    if (error) throw new Error(error);

    return {
      getTipAngajatId: () => tip_angajat_id,
    };
  };
};

module.exports = buildDeleteTipAngajatReq;
