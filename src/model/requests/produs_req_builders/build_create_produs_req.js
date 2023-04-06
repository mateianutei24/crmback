const buildCreateProdusReq = (createProdusReqValidator) => {
  return ({ nume_produs, gama } = {}) => {
    let { error } = createProdusReqValidator({
      nume_produs,
      gama,
    });
    if (error) throw new Error(error);

    return {
      getNumeProdus: () => nume_produs,
      getGama: () => gama,
    };
  };
};

module.exports = buildCreateProdusReq;
