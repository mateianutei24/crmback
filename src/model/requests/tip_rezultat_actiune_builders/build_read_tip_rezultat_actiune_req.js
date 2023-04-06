const buildReadTipRezultatActiuneReq = (readTipRezultatActiuneReqValidator) => {
  return ({ tip_rezultat_id } = {}) => {
    let { error } = readTipRezultatActiuneReqValidator({
      tip_rezultat_id,
    });
    if (error) throw new Error(error);

    return {
      getTipRezultatActiuneId: () => tip_rezultat_id,
    };
  };
};

module.exports = buildReadTipRezultatActiuneReq;
