const buildCreateTipOportunitateReq = (createTipOportunitateReqValidator) => {
  return ({ nume_tip_oportunitate } = {}) => {
    let { error } = createTipOportunitateReqValidator({
      nume_tip_oportunitate,
    });
    if (error) throw new Error(error);

    return {
      getNumeTipOportunitate: () => nume_tip_oportunitate,
    };
  };
};

module.exports = buildCreateTipOportunitateReq;
