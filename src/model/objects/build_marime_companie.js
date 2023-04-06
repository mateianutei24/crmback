const buildMarimeCompanie = (marimeCompanieValidator) => {
  return ({ marime_companie } = {}) => {
    let { error } = marimeCompanieValidator({
      marime_companie,
    });
    if (error) throw new Error(error);

    return {
      getMarimeCompanie: () => marime_companie,
    };
  };
};

module.exports = buildMarimeCompanie;
