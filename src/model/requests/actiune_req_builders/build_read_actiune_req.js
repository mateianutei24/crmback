const buildReadActiuneReq = (readActiuneReqValidator) => {
  return ({ actiune_id } = {}) => {
    let { error } = readActiuneReqValidator({
      actiune_id,
    });
    if (error) throw new Error(error);

    return {
      getActiuneId: () => actiune_id,
    };
  };
};

module.exports = buildReadActiuneReq;
