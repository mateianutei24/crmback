const buildCreateTipObiectivReq = (createTipObiectivReqValidator) => {
  return ({ nume_tip_oportunitate } = {}) => {
    let { error } = createTipObiectivReqValidator({
      nume_tip_oportunitate,
    });
    if (error) throw new Error(error);

    return {
      getNumeTipObiectiv: () => nume_tip_obiectiv,
    };
  };
};

module.exports = buildCreateTipObiectivReq;
