const buildReadProdusReq = (readProdusReqValidator) => {
  return ({ produs_id } = {}) => {
    let { error } = readProdusReqValidator({
      produs_id,
    });
    if (error) throw new Error(error);

    return {
      getProdusId: () => produs_id,
    };
  };
};

module.exports = buildReadProdusReq;
