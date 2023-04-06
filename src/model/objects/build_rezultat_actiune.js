const buildRezultatActiune = (rezultatActiuneValidator) => {
  return ({ rezultat_id, tip_rezultat, valoare, actiune_id } = {}) => {
    let { error } = rezultatActiuneValidator({
      rezultat_id,
      tip_rezultat,
      valoare,
      actiune_id,
    });
    if (error) throw new Error(error);

    return {
      getRezultatId: () => rezultat_id,
      getTipRezultat: () => tip_rezultat,
      getValoare: () => valoare,
      getActiuneId: () => actiune_id,
    };
  };
};

module.exports = buildRezultatActiune;
