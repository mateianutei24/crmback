const buildReadRezultatActiuneReq = (readRezultatActiuneReqValidator) => {
  return ({ rezultat_id } = {}) => {
    let { error } = readRezultatActiuneReqValidator({
      rezultat_id,
    });
    if (error) throw new Error(error);

    return {
      getRezultatId: () => rezultat_id,
    };
  };
};

module.exports = buildReadRezultatActiuneReq;
