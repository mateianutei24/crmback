const buildDeleteOportunitateReq = (deleteOportunitateReqValidator) => {
  return ({ oportunitate_id } = {}) => {
    let { error } = deleteOportunitateReqValidator({
      oportunitate_id,
    });
    if (error) throw new Error(error);

    return {
      getOportunitateId: () => oportunitate_id,
    };
  };
};

module.exports = buildDeleteOportunitateReq;
