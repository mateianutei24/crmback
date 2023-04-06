const buildUpdateTipAngajatReq = (updateTipAngajatReqValidator) => {
  return ({ tip_angajat_id, nume_tip_angajat } = {}) => {
    let { error } = updateTipAngajatReqValidator({
      tip_angajat_id,
      nume_tip_angajat,
    });
    if (error) throw new Error(error);

    return {
      getTipAngajatId: () => tip_angajat_id,
      getNumeTipAngajat: () => nume_tip_angajat,
    };
  };
};

module.exports = buildUpdateTipAngajatReq;
