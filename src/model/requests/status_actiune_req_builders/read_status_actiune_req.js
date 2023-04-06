const buildReadStatusActiuneReq = (readStatusActiuneReqValidator) => {
  return ({ status_actiune_id } = {}) => {
    let { error } = readStatusActiuneReqValidator({
      status_actiune_id,
    });
    if (error) throw new Error(error);

    return {
      getStatusActiuneId: () => status_actiune_id,
    };
  };
};

module.exports = buildReadStatusActiuneReq;
