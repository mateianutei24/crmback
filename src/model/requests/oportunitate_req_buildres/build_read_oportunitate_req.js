const buildReadOportunitateReq = (readOportunitateReqValidator) => {
  return ({ oportunitate_id } = {}) => {
    let { error } = readOportunitateReqValidator({
      oportunitate_id,
    });
    if (error) throw new Error(error);

    return {
      getOportunitateId: () => oportunitate_id,
    };
  };
};

module.exports = buildReadOportunitateReq;
