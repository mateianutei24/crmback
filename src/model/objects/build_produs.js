const buildProdus = (produsValidator) => {
  return ({ produs_id, nume_produs, gama } = {}) => {
    let { error } = produsValidator({
      produs_id,
      nume_produs,
      gama,
    });
    if (error) throw new Error(error);

    return {
      getProdusId: () => produs_id,
      getNumeProdus: () => nume_produs,
      getGama: () => gama,
    };
  };
};

module.exports = buildProdus;
