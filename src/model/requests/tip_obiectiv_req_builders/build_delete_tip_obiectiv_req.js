const buildDeleteTipObiectivReq = (deleteTipObiectivReqValidator) => {
  return ({ tip_obiectiv_id } = {}) => {
    let { error } = deleteTipObiectivReqValidator({
      tip_obiectiv_id,
    });
    if (error) throw new Error(error);

    return {
      getTipObiectivId: () => tip_obiectiv_id,
    };
  };
};

module.exports = buildDeleteTipObiectivReq;
