const buildDeleteActiuneReq = (deleteActiuneReqValidator) => {
  return ({ actiune_id } = {}) => {
    let { error } = deleteActiuneReqValidator({
      actiune_id,
    });
    if (error) throw new Error(error);

    return {
      getActiuneId: () => actiune_id,
    };
  };
};

module.exports = buildDeleteActiuneReq;
