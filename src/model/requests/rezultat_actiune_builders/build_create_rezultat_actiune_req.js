const buildCreateRezultatActiuneReq = (createRezultatActiuneReqValidator) => {
  return ({ tip_rezultat, valoare, actiune_id, rezultat_descriere } = {}) => {
    let { error } = createRezultatActiuneReqValidator({
      tip_rezultat,
      valoare,
      actiune_id,
      rezultat_descriere,
    });
    if (error) throw new Error(error);

    return {
      getTipRezultat: () => tip_rezultat,
      getValoare: () => valoare,
      getActiuneId: () => actiune_id,
      getRezultatDescriere: () => rezultat_descriere,
    };
  };
};

module.exports = buildCreateRezultatActiuneReq;
