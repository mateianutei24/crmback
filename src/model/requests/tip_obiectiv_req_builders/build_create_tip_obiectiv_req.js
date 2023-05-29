const buildCreateTipObiectivReq = (createTipObiectivReqValidator) => {
  return ({ nume_tip_obiectiv } = {}) => {
    let { error } = createTipObiectivReqValidator({
      nume_tip_obiectiv,
    });
    if (error) throw new Error(error);

    return {
      getNumeTipObiectiv: () => nume_tip_obiectiv,
    };
  };
};

module.exports = buildCreateTipObiectivReq;
