const buildReadTipOportunitateReq = (createTipOportunitateReqValidator) => {
  return ({ tip_oportunitate_id } = {}) => {
    let { error } = createTipOportunitateReqValidator({
      tip_oportunitate_id,
    });
    if (error) throw new Error(error);

    return {
      getTipOportunitateId: () => tip_oportunitate_id,
    };
  };
};

module.exports = buildReadTipOportunitateReq;
