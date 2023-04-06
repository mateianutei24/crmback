const buildCreateRezultatActiuneReq = (createRezultatActiuneReqValidator) => {
  return ({ tip_rezultat, valoare, actiune_id } = {}) => {
    let { error } = createRezultatActiuneReqValidator({
      tip_rezultat,
      valoare,
      actiune_id,
    });
    if (error) throw new Error(error);

    return {
      getTipRezultat: () => tip_rezultat,
      getValoare: () => valoare,
      getActiuneId: () => actiune_id,
    };
  };
};

module.exports = buildCreateRezultatActiuneReq;
