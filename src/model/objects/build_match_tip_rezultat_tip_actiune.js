const buildMatchTipRezultatTipActiune = (
  matchTipRezultatTipActiuneValidator
) => {
  return ({ tip_actiune_id, tip_rezultat_id } = {}) => {
    let { error } = matchTipRezultatTipActiuneValidator({
      tip_actiune_id,
      tip_rezultat_id,
    });
    if (error) throw new Error(error);

    return {
      getTipActiuneId: () => tip_actiune_id,
      getTipRezultatId: () => tip_rezultat_id,
    };
  };
};

module.exports = buildMatchTipRezultatTipActiune;
