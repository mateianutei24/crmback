const buildCreateMarimeCompanieReq = (createMarimeCompanieReqValidator) => {
  return ({ marime_companie } = {}) => {
    let { error } = createMarimeCompanieReqValidator({
      marime_companie,
    });
    if (error) throw new Error(error);

    return {
      getMarimeCompanie: () => marime_companie,
    };
  };
};

module.exports = buildCreateMarimeCompanieReq;
