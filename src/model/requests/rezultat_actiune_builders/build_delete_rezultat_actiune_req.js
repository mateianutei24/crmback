const buildDeleteRezultatActiuneReq = (deleteRezultatActiuneReqValidator) => {
  return ({ rezultat_id } = {}) => {
    let { error } = deleteRezultatActiuneReqValidator({
      rezultat_id,
    });
    if (error) throw new Error(error);

    return {
      getRezultatId: () => rezultat_id,
    };
  };
};

module.exports = buildDeleteRezultatActiuneReq;
