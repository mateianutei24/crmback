const buildUpdateMarimeCompanieReq = (updateMarimeCompanieReqValidator) => {
  return ({ marime_companie_id, marime_companie } = {}) => {
    let { error } = updateMarimeCompanieReqValidator({
      marime_companie_id,
      marime_companie,
    });
    if (error) throw new Error(error);

    return {
      getMarimeCompanie: () => marime_companie,
      getMarimeCompanieId: () => marime_companie_id,
    };
  };
};

module.exports = buildUpdateMarimeCompanieReq;
