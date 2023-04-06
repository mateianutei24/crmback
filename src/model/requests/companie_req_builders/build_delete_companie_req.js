const buildDeleteCompanieReq = (deleteCompanieReqValidator) => {
  return ({ companie_id } = {}) => {
    let { error } = deleteCompanieReqValidator({
      companie_id,
    });
    if (error) throw new Error(error);

    return {
      getCompanieId: () => companie_id,
    };
  };
};

module.exports = buildDeleteCompanieReq;
