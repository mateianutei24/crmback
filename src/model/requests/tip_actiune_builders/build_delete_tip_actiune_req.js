const buildDeleteTipActiuneReq = (deleteTipActiuneReqValidator) => {
  return ({ tip_actiune_id } = {}) => {
    let { error } = deleteTipActiuneReqValidator({
      tip_actiune_id,
    });
    if (error) throw new Error(error);

    return {
      getTipActiuneId: () => tip_actiune_id,
    };
  };
};

module.exports = buildDeleteTipActiuneReq;
