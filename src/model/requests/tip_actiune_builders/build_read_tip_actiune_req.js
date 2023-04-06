const buildReadTipActiuneReq = (readTipActiuneReqValidator) => {
  return ({ tip_actiune_id } = {}) => {
    let { error } = readTipActiuneReqValidator({
      tip_actiune_id,
    });
    if (error) throw new Error(error);

    return {
      getTipActiuneId: () => tip_actiune_id,
    };
  };
};

module.exports = buildReadTipActiuneReq;
