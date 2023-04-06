const buildUpdateTipObiectivReq = (updateTipObiectivReqValidator) => {
  return ({ tip_obiectiv_id, nume_tip_obiectiv } = {}) => {
    let { error } = updateTipObiectivReqValidator({
      tip_obiectiv_id,
      nume_tip_obiectiv,
    });
    if (error) throw new Error(error);

    return {
      getTipObiectivId: () => tip_obiectiv_id,
      getNumeTipObiectiv: () => nume_tip_obiectiv,
    };
  };
};

module.exports = buildUpdateTipObiectivReq;
