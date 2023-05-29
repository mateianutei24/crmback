const buildUpdateRezultatActiuneReq = (updateRezultatActiuneReqValidator) => {
  return ({
    rezultat_id,
    tip_rezultat,
    valoare,
    actiune_id,
    rezultat_descriere,
  } = {}) => {
    let { error } = updateRezultatActiuneReqValidator({
      rezultat_id,
      tip_rezultat,
      valoare,
      actiune_id,
      rezultat_descriere,
    });
    if (error) throw new Error(error);

    return {
      getRezultatId: () => rezultat_id,
      getTipRezultat: () => tip_rezultat,
      getValoare: () => valoare,
      getActiuneId: () => actiune_id,
      getRezultatDescriere: () => rezultat_descriere,
    };
  };
};

module.exports = buildUpdateRezultatActiuneReq;
