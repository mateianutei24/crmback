const buildUpdateTipRezultatActiuneReq = (
  updateTipRezultatActiuneReqValidator
) => {
  return ({ tip_rezultat_id, nume_tip_rezultat } = {}) => {
    let { error } = updateTipRezultatActiuneReqValidator({
      tip_rezultat_id,
      nume_tip_rezultat,
    });
    if (error) throw new Error(error);

    return {
      getTipRezultatActiuneId: () => tip_rezultat_id,
      getNumeTipRezultatActiune: () => nume_tip_rezultat,
    };
  };
};

module.exports = buildUpdateTipRezultatActiuneReq;
