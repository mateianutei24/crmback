const buildCreateTipAngajatReq = (createTipAngajatReqValidator) => {
  return ({ nume_tip_angajat } = {}) => {
    let { error } = createTipAngajatReqValidator({
      nume_tip_angajat,
    });
    if (error) throw new Error(error);

    return {
      getNumeTipAngajat: () => nume_tip_angajat,
    };
  };
};

module.exports = buildCreateTipAngajatReq;
