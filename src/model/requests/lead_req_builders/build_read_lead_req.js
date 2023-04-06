const buildReadLeadReq = (readLeadReqValidator) => {
  return ({ lead_id } = {}) => {
    let { error } = readLeadReqValidator({
      lead_id,
    });
    if (error) throw new Error(error);

    return {
      getLeadId: () => lead_id,
    };
  };
};

module.exports = buildReadLeadReq;
