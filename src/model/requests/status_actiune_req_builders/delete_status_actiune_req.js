const buildDeleteStatusActiuneReq = (deleteStatusActiuneReqValidator) => {
  return ({ status_actiune_id } = {}) => {
    let { error } = deleteStatusActiuneReqValidator({
      status_actiune_id,
    });
    if (error) throw new Error(error);

    return {
      getStatusActiuneId: () => status_actiune_id,
    };
  };
};

module.exports = buildDeleteStatusActiuneReq;
