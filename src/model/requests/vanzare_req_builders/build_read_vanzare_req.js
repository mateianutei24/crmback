const buildReadVanzareReq = (readVanzareReqValidator) => {
  return ({ vanzare_id } = {}) => {
    let { error } = readVanzareReqValidator({
      vanzare_id,
    });
    if (error) throw new Error(error);

    return {
      getVanzareId: () => vanzare_id,
    };
  };
};

module.exports = buildReadVanzareReq;
