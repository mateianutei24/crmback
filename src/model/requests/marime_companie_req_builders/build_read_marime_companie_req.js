const buildReadMarimeCompanieReq = (readMarimeCompanieReqValidator) => {
  return ({ marime_companie_id } = {}) => {
    let { error } = readMarimeCompanieReqValidator({
      marime_companie_id,
    });
    if (error) throw new Error(error);

    return {
      getMarimeCompanieId: () => marime_companie_id,
    };
  };
};

module.exports = buildReadMarimeCompanieReq;
