const buildDeleteTipRezultatActiuneReq = (
  deleteTipRezultatActiuneReqValidator
) => {
  return ({ tip_rezultat_id } = {}) => {
    let { error } = deleteTipRezultatActiuneReqValidator({
      tip_rezultat_id,
    });
    if (error) throw new Error(error);

    return {
      getTipRezultatActiuneId: () => tip_rezultat_id,
    };
  };
};

module.exports = buildDeleteTipRezultatActiuneReq;
