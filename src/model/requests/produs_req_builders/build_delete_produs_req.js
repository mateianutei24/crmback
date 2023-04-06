const buildDeleteProdusReq = (deleteProdusReqValidator) => {
  return ({ produs_id } = {}) => {
    let { error } = deleteProdusReqValidator({
      produs_id,
    });
    if (error) throw new Error(error);

    return {
      getProdusId: () => produs_id,
    };
  };
};

module.exports = buildDeleteProdusReq;
