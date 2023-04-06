const buildCreateTipActiuneReq = (createTipActiuneReqValidator) => {
  return ({ nume_tip_actiune, timp_executie } = {}) => {
    let { error } = createTipActiuneReqValidator({
      nume_tip_actiune,
      timp_executie,
    });
    if (error) throw new Error(error);

    return {
      getNumeTipActiune: () => nume_tip_actiune,
      getTimpExecutie: () => timp_executie,
    };
  };
};

module.exports = buildCreateTipActiuneReq;
