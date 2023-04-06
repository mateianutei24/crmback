const buildTipAngajat = (tipAngajatValidator) => {
  return ({ tip_angajat_id, nume_tip_angajat } = {}) => {
    let { error } = tipAngajatValidator({
      tip_angajat_id,
      nume_tip_angajat,
    });
    if (error) throw new Error(error);

    return {
      getTipAngajatId: () => tip_angajat_id,
      getNumeTipAngajat: () => nume_tip_angajat,
    };
  };
};

module.exports = buildTipAngajat;
