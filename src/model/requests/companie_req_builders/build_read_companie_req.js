const buildReadCompanieReq = (readCompanieReqValidator) => {
  return ({ companie_id } = {}) => {
    let { error } = readCompanieReqValidator({
      companie_id,
    });
    if (error) throw new Error(error);

    return {
      getCompanieId: () => companie_id,
    };
  };
};

module.exports = buildReadCompanieReq;
