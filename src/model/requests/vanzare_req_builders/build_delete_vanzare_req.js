const buildDeleteVanzareReq = (deleteVanzareReqValidator) => {
  return ({ vanzare_id } = {}) => {
    let { error } = deleteVanzareReqValidator({
      vanzare_id,
    });
    if (error) throw new Error(error);

    return {
      getVanzareId: () => vanzare_id,
    };
  };
};

module.exports = buildDeleteVanzareReq;
