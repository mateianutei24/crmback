const buildReadTipObiectivReq = (readTipObiectivReqValidator) => {
  return ({ tip_obiectiv_id } = {}) => {
    let { error } = readTipObiectivReqValidator({
      tip_obiectiv_id,
    });
    if (error) throw new Error(error);

    return {
      getTipObiectivId: () => tip_obiectiv_id,
    };
  };
};

module.exports = buildReadTipObiectivReq;
