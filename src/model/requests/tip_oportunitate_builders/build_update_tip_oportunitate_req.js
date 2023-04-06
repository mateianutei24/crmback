const buildUpdateTipOportunitateReq = (updateTipOportunitateReqValidator) => {
  return ({ tip_oportunitate_id, nume_tip_oportunitate } = {}) => {
    let { error } = updateTipOportunitateReqValidator({
      tip_oportunitate_id,
      nume_tip_oportunitate,
    });
    if (error) throw new Error(error);

    return {
      getTipOportunitateId: () => tip_oportunitate_id,
      getNumeTipOportunitate: () => nume_tip_oportunitate,
    };
  };
};

module.exports = buildUpdateTipOportunitateReq;
