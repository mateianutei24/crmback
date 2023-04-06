const buildUpdateProdusReq = (updateProdusReqValidator) => {
  return ({ produs_id, nume_produs, gama } = {}) => {
    let { error } = updateProdusReqValidator({
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

module.exports = buildUpdateProdusReq;
