const buildCreateTipRezultatActiuneReq = (
  createTipRezultatActiuneReqValidator
) => {
  return ({ nume_tip_rezultat } = {}) => {
    let { error } = createTipRezultatActiuneReqValidator({
      nume_tip_rezultat,
    });
    if (error) throw new Error(error);

    return {
      getNumeTipRezultatActiune: () => nume_tip_rezultat,
    };
  };
};

module.exports = buildCreateTipRezultatActiuneReq;
