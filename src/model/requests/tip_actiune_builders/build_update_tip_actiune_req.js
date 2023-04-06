const buildUpdateTipActiuneReq = (updateTipActiuneReqValidator) => {
  return ({ tip_actiune_id, nume_tip_actiune, timp_executie } = {}) => {
    let { error } = updateTipActiuneReqValidator({
      tip_actiune_id,
      nume_tip_actiune,
      timp_executie,
    });
    if (error) throw new Error(error);

    return {
      getTipActiuneId: () => tip_actiune_id,
      getNumeTipActiune: () => nume_tip_actiune,
      getTimpExecutie: () => timp_executie,
    };
  };
};

module.exports = buildUpdateTipActiuneReq;
