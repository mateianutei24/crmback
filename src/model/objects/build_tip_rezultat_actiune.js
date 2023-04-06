const buildTipRezultatActiune = (tipRezultatActiuneValidator) => {
  return ({ tip_rezultat } = {}) => {
    let { error } = tipRezultatActiuneValidator({
      tip_rezultat,
    });
    if (error) throw new Error(error);

    return {
      getTipRezultatActiune: () => tip_rezultat,
    };
  };
};

module.exports = buildTipRezultatActiune;
