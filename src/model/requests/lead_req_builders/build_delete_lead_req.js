const buildDeleteLeadReq = (deleteLeadReqValidator) => {
  return ({ lead_id } = {}) => {
    let { error } = deleteLeadReqValidator({
      lead_id,
    });
    if (error) throw new Error(error);

    return {
      getLeadId: () => lead_id,
    };
  };
};

module.exports = buildDeleteLeadReq;
