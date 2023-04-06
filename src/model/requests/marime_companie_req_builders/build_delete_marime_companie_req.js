const buildDeleteMarimeCompanieReq = (deleteMarimeCompanieReqValidator) => {
  return ({ marime_companie_id } = {}) => {
    let { error } = deleteMarimeCompanieReqValidator({
      marime_companie_id,
    });
    if (error) throw new Error(error);

    return {
      getMarimeCompanieId: () => marime_companie_id,
    };
  };
};

module.exports = buildDeleteMarimeCompanieReq;
