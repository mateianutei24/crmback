const buildDeletePunctLucruReq = (deletePunctLucruReqValidator) => {
  return ({ punct_lucru_id } = {}) => {
    let { error } = deletePunctLucruReqValidator({
      punct_lucru_id,
    });
    if (error) throw new Error(error);

    return {
      getPunctLucruId: () => punct_lucru_id,
    };
  };
};

module.exports = buildDeletePunctLucruReq;
