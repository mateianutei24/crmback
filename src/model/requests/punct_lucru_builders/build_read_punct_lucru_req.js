const buildReadPunctLucruReq = (readPunctLucruReqValidator) => {
  return ({ punct_lucru_id } = {}) => {
    let { error } = readPunctLucruReqValidator({
      punct_lucru_id,
    });
    if (error) throw new Error(error);

    return {
      getPunctLucruId: () => punct_lucru_id,
    };
  };
};

module.exports = buildReadPunctLucruReq;
