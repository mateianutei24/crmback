const buildTipActiune = (tipActiuneValidator) => {
  return ({ tip_actiune_id, timp_executie, rezultate_disponibile } = {}) => {
    let { error } = tipActiuneValidator({
      tip_actiune_id,
      timp_executie,
      rezultate_disponibile,
    });
    if (error) throw new Error(error);

    return {
      getTipActiuneId: () => tip_actiune_id,
      getTimpExecutie: () => timp_executie,
      getRezultateDisponibile: () => rezultate_disponibile,
    };
  };
};

module.exports = buildTipActiune;
