const buildDeleteTipOportunitateReq = (deleteTipOportunitateReqValidator) => {
  return ({ tip_oportunitate_id } = {}) => {
    let { error } = deleteTipOportunitateReqValidator({
      tip_oportunitate_id,
    });
    if (error) throw new Error(error);

    return {
      getTipOportunitateId: () => tip_oportunitate_id,
    };
  };
};

module.exports = buildDeleteTipOportunitateReq;
